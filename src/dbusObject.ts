import {DBusInterface} from "./dbusInterface";
import {Interfaces} from "@dbus-types/dbus";
import {DBusService} from "./dbusService";
import {introspectBus} from "./utils/introspect";


export class DBusObject<K extends {[name: string]: any} = {}> {

    private _proxy: { [inf: string]: DBusInterface };
    private _nodes: string[];

    constructor(public name, public service: DBusService<K>) {}

    async introspect(): Promise<this> {
        [this.name, this._proxy, this._nodes] = await introspectBus(this)
        return this;
    }

    as<T extends keyof Interfaces>(name: T): DBusInterface & Interfaces[T]
    as<T extends keyof K>(name: T): DBusInterface & K[T]
    as(name: string): DBusInterface
    as(name: string): DBusInterface {
        if (typeof this._proxy[name] === 'undefined') {
            throw new Error(`Object ${this.name} doesn't implement interface ${name}`);
        }
        return <DBusInterface>this._proxy[name];
    }

    interfaces(): string[] {
        let out = [];
        for (let k in this._proxy) {
            if (this._proxy.hasOwnProperty(k))
                out.push(k);
        }
        return out;
    }

    nodes(): string[] {
        return this._nodes
    }
}
