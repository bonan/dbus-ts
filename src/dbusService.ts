import {DBusObject} from "./dbusObject";
import {MessageBus} from "./messageBus";

export class DBusService {
    constructor(public name: string, public bus: MessageBus) {

    }

    async getObject(name): Promise<DBusObject> {
        if(name==undefined)
            throw new Error('Object name is null or undefined');
        const obj = new DBusObject(name, this);
        return await obj.introspect();
    }

    async getInterface(objname, name) {
        const obj = await this.getObject(objname);
        return obj.as(name);
    };

}
