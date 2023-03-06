import {DBusObject} from "./dbusObject";
import {MessageBus} from "./messageBus";
import {Interfaces} from "@dbus-types/dbus";
import {DBusInterface} from "./dbusInterface";

export class DBusService<K extends {[name: string]: any} = {}> {
    constructor(public name: string, public bus: MessageBus<K>) {

    }

    async getObject(name: string): Promise<DBusObject<K>> {
        if(name==undefined)
            throw new Error('Object name is null or undefined');
        const obj = new DBusObject<K>(name, this);
        return await obj.introspect();
    }

    getInterface<T extends keyof Interfaces>(objname: string, name: T): Promise<DBusInterface & Interfaces[T]>
    getInterface<T extends keyof K>(objname: string, name: T): Promise<DBusInterface & K[T]>
    getInterface(objname: string, name: string): Promise<DBusInterface>
    async getInterface(objname, name) {
        const obj = await this.getObject(objname);
        return obj.as(name);
    };

}
