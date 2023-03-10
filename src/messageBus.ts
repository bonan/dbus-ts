import {EventEmitter} from "events";
import {stdDbusIfaces} from './utils/stdifaces'
import {DBusObject} from "./dbusObject";
import {Message} from "./message";
import {DBusService} from "./dbusService";
import {messageType} from "./utils/constants";
import {Interfaces} from "@dbus-types/dbus";
import {Connection} from "./connection";
import {DBusInterface} from "./dbusInterface";


export class MessageBus<K extends {[name: string]: any} = {}> {

    public serial: number = 1;
    private cookies: { [serial: number]: [(res?: any)=>void, (err?: any)=>void] } = {}
    private methodCallHandlers: any = {}
    public signals = new EventEmitter()
    public exportedObjects: any = {};
    private name: string;
    private _dbus: DBusObject<K>

    constructor(public connection: Connection, private opts: any = {}) {
        this.connection.on('message', (msg) => this.onMessage(msg))
        // register name
        if (opts.direct !== true) {
            this.invokeDbus({member: "Hello"}).then(name => [this.name] = name);
        } else {
            this.name = null;
        }

    }

    public async dbus() {
        if (!this._dbus) {
            this._dbus = await this.getObject('org.freedesktop.DBus', '/org/freedesktop/DBus');
        }
        return this._dbus.as('org.freedesktop.DBus');
    }

    invoke(msg: Message): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!msg.type) msg.type = messageType.methodCall;
            msg.serial = this.serial++;
            this.cookies[msg.serial] = [resolve,reject];
            this.connection.message(msg);
        })
    }

    invokeDbus(msg: Message): Promise<any> {
        if (!msg.path) msg.path = '/org/freedesktop/DBus';
        if (!msg.destination) msg.destination = 'org.freedesktop.DBus';
        if (!msg['interface']) msg['interface'] = 'org.freedesktop.DBus';
        return this.invoke(msg);
    }

    mangle(msg: Message): string
    mangle(path: string, iface: string, member: string): string
    mangle(path: Message|string, iface?: string, member?: string): string {
        let obj: Message = {};
        if (typeof path === 'object') {
            // handle one argument case mangle(msg)
            obj.path = path.path;
            obj['interface'] = path['interface'];
            obj.member = path.member;
        } else {
            obj.path = path;
            obj['interface'] = iface;
            obj.member = member;
        }
        return JSON.stringify(obj);
    }

    sendSignal(path: string, iface: string, name: string, signature?: string, args?: any) {
        let signalMsg: Message = {
            type: messageType.signal,
            serial: this.serial++,
            interface: iface,
            path: path,
            member: name
        };
        if (signature) {
            signalMsg.signature = signature;
            signalMsg.body = args;
        }
        this.connection.message(signalMsg);
    }

    sendError(msg: Message, errorName: string, errorText: string) {
        let reply: Message = {
            type: messageType.error,
            serial: this.serial++,
            replySerial: msg.serial,
            destination: msg.sender,
            errorName: errorName,
            signature: 's',
            body: [errorText]
        };
        this.connection.message(reply);
    }

    sendReply(msg: Message, signature: string, body: any) {
        let reply: Message = {
            type: messageType.methodReturn,
            serial: this.serial++,
            replySerial: msg.serial,
            destination: msg.sender,
            signature: signature,
            body: body
        };
        this.connection.message(reply);
    }

    private onMessage(msg: Message) {
        const self = this;
        function invoke(impl, func, resultSignature) {
            Promise.resolve()
                .then(function() {
                    return func.apply(impl, (msg.body || []).concat(msg));
                })
                .then(
                    function(methodReturnResult) {
                        let methodReturnReply: Message = {
                            type: messageType.methodReturn,
                            serial: self.serial++,
                            destination: msg.sender,
                            replySerial: msg.serial
                        };
                        if (methodReturnResult !== null) {
                            methodReturnReply.signature = resultSignature;
                            methodReturnReply.body = [methodReturnResult];
                        }
                        self.connection.message(methodReturnReply);
                    },
                    function(e) {
                        self.sendError(
                            msg,
                            e.dbusName || 'org.freedesktop.DBus.Error.Failed',
                            e.message || ''
                        );
                    }
                );
        }

        let handler;
        if (
            msg.type === messageType.methodReturn ||
            msg.type === messageType.error
        ) {
            if (typeof self.cookies[msg.replySerial] !== 'undefined') {
                const [resolve, reject] = self.cookies[msg.replySerial];
                delete self.cookies[msg.replySerial];
                let args = msg.body || [];
                if (msg.type === messageType.methodReturn) {
                    resolve(args);
                } else {
                    reject(args);
                }
            }
        } else if (msg.type === messageType.signal) {
            self.signals.emit(self.mangle(msg), msg.body, msg.signature);
        } else {
            // methodCall

            if (stdDbusIfaces(msg, self)) return;

            // exported interfaces handlers
            let obj, iface, impl;
            if ((obj = self.exportedObjects[msg.path])) {
                if ((iface = obj[msg['interface']])) {
                    // now we are ready to serve msg.member
                    impl = iface[1];
                    let func = impl[msg.member];
                    if (!func) {
                        self.sendError(
                            msg,
                            'org.freedesktop.DBus.Error.UnknownMethod',
                            `Method "${msg.member}" on interface "${msg.interface}" doesn't exist`
                        );
                        return;
                    }
                    // TODO safety check here
                    let resultSignature = iface[0].methods[msg.member][1];
                    invoke(impl, func, resultSignature);
                    return;
                } else {
                    // TODO: respond with standard dbus error
                    this.connection.emit('message_error', `Interface ${msg['interface']} is not supported`, msg);
                }
            }
            // setMethodCall handlers
            handler = self.methodCallHandlers[self.mangle(msg)];
            if (handler) {
                invoke(null, handler[0], handler[1]);
            } else {
                self.sendError(
                    msg,
                    'org.freedesktop.DBus.Error.UnknownService',
                    'Uh oh oh'
                );
            }
        }
    }

    setMethodCallHandler(objectPath, iface, member, handler) {
        let key = this.mangle(objectPath, iface, member);
        this.methodCallHandlers[key] = handler;
    }

    exportInterface(obj, path, iface) {
        const self = this;
        let entry;
        if (!this.exportedObjects[path]) {
            entry = this.exportedObjects[path] = {};
        } else {
            entry = this.exportedObjects[path];
        }
        entry[iface.name] = [iface, obj];
        // monkey-patch obj.emit()
        if (typeof obj.emit === 'function') {
            let oldEmit = obj.emit;
            obj.emit = function() {
                let args = Array.prototype.slice.apply(arguments);
                let signalName = args[0];
                if (!signalName) throw new Error('Trying to emit undefined signal');

                //send signal to bus
                let signal;
                if (iface.signals && iface.signals[signalName]) {
                    signal = iface.signals[signalName];
                    let signalMsg: any = {
                        type: messageType.signal,
                        serial: self.serial++,
                        interface: iface.name,
                        path: path,
                        member: signalName
                    };
                    if (signal[0]) {
                        signalMsg.signature = signal[0];
                        signalMsg.body = args.slice(1);
                    }
                    self.connection.message(signalMsg);
                    self.serial++;
                }
                // note that local emit is likely to be called before signal arrives
                // to remote subscriber
                oldEmit.apply(obj, args);
            };
        }
        // TODO: emit ObjectManager's InterfaceAdded
    }

    getService(name: string) {
        return new DBusService<K>(name, this);
    }

    async getObject(service, name): Promise<DBusObject<K>> {
        return await this.getService(service).getObject(name);
    };

    getInterface<T extends keyof Interfaces>(service: string, name: string, inf: T): Promise<DBusInterface & Interfaces[T]>
    getInterface<T extends keyof K>(service: string, name: string, inf: T): Promise<DBusInterface & K[T]>
    getInterface(service: string, name: string, inf: string): Promise<DBusInterface>
    async getInterface(service: string, name: string, inf: string) {
        return await this.getService(service).getObject(name).then(s => s.as(inf));
    };

}
