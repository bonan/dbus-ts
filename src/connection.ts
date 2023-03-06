// dbus.freedesktop.org/doc/dbus-specification.html

import {EventEmitter} from "events";
import {Readable, Writable} from "stream";
import * as net from 'net';

import {marshallMessage, messageParser} from './utils/messageParser';
import {Opts, clientHandshake} from './utils/handshake';
import {MessageBus} from './messageBus';
import {Message} from './message';

export declare type ConnectOpts = (
    {stream: Readable&Writable} |
    {host: string, port: number} |
    {socket: string} |
    {busAddress?: string}
);


function createStream(opts: ConnectOpts): Readable&Writable {
    if (typeof opts !== 'object') {
        opts = {};
    }
    if ("stream" in opts) {
        return opts.stream;
    }
    if ("socket" in opts) {
        return net.createConnection(opts.socket);
    }
    if ("port" in opts) {
        return net.createConnection(opts.port, opts.host);
    }

    let busAddress = opts.busAddress || process.env.DBUS_SESSION_BUS_ADDRESS;
    if (!busAddress) throw new Error('unknown bus address');

    let addresses = busAddress.split(';');
    for (let i = 0; i < addresses.length; ++i) {
        let address = addresses[i];
        let familyParams = address.split(':');
        let family = familyParams[0];
        let params: any = {};
        familyParams[1].split(',').map(function(p) {
            let keyVal = p.split('=');
            params[keyVal[0]] = keyVal[1];
        });

        try {
            switch (family.toLowerCase()) {
                case 'tcp':
                    let host = params.host || 'localhost';
                    let port = params.port;
                    return net.createConnection(port, host);
                case 'unix':
                    if (params.socket) return net.createConnection(params.socket);
                    if (params.path) return net.createConnection(params.path);
                    throw new Error(
                        "not enough parameters for 'unix' connection - you need to specify 'socket' or 'path' parameter"
                    );
                default:
                    throw new Error('unknown address type:' + family);
            }
        } catch (e) {
            if (i < addresses.length - 1) {
                console.warn(e.message);
            } else {
                throw e;
            }
        }
    }
}


export class Connection extends EventEmitter {

    message: (msg: Message) => void;
    private state: string
    private guid: string|void
    private _messages: Message[] = [];

    constructor(public stream: Readable&Writable) {
        super();

        stream.on('error', (err) => {
            // forward network and stream errors
            console.error('dbus socket error', err);
            this.emit('error', err);
        });

        stream.on('end', () => {
            console.warn('dbus socket ended');
            this.emit('end');
            this.message = () => console.warn("Didn't write bytes to closed stream");
        });

        this.message = (msg) => this._messages.push(msg);

        this.once('connect', () => {
            this.state = 'connected';
            for (let msg of this._messages) {
                this.write(marshallMessage(msg));
            }
            this._messages = [];

            // no need to buffer once connected
            this.message = (msg) => {
                this.write(marshallMessage(msg));
            };
        });
        if (typeof (<any>stream).setNoDelay === 'function') {
            (<any>stream).setNoDelay();
        }

    }

    async init(opts?: ConnectOpts&Opts) {
        if (this.guid) return;
        this.guid = await clientHandshake(this.stream, opts);
        this.emit('connect');
        messageParser(this.stream, (msg) => {
            this.emit('message', msg)
        }, opts);
    }

    write(chunk: any) {
        return this.stream.write(chunk)
    }

    end() {
        this.stream.end();
        return this;
    }


}

export async function createConnection(opts?: ConnectOpts&Opts) {
    if (!opts) opts = {};
    let conn = new Connection(createStream(opts));
    await conn.init(opts);
    return conn;
}

export async function createClient<K extends {[name: string]: any} = {}>(opts?: ConnectOpts&Opts) {
    let connection = await createConnection(opts || {});
    return new MessageBus<K>(connection, opts || {});
}

export async function systemBus<K extends {[name: string]: any} = {}>(opts?: Opts) {
    return await createClient<K>({
        ...opts,
        busAddress:
            process.env.DBUS_SYSTEM_BUS_ADDRESS ||
            'unix:path=/var/run/dbus/system_bus_socket'
    });
}

export async function sessionBus<K extends {[name: string]: any} = {}>(opts?: ConnectOpts&Opts) {
    return await createClient<K>(opts);
}
