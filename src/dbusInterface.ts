import {Message} from "./message";
import {DBusObject} from "./dbusObject";
import {isPromise} from "util/types";

export class DBusInterface
{
    private $methods: {[name: string]: string} = {}
    private $methodArgs: {[name: string]: {type: string, name?:string, direction:"in"|"out"}[]} = {}
    private $signals: {[name: string]: {type: string, name?: string}[]} = {}
    private $properties: {[name: string]: {type: string, access: 'read'|'write'|'readwrite'}} = {}
    private $callbacks: any[] = []
    private $sigHandlers: any[] = []
    private $name;

    constructor(public $parent: DBusObject, iface: any) {
        this.$name = iface['$'].name;
        for (let m = 0; iface.method && m < iface.method.length; ++m) {
            let method = iface.method[m];
            let signature = '';
            let methodName = method['$'].name;
            let args = [];
            for (let argx of method.arg || []) {
                let arg = argx['$'];
                args.push(arg);
                if (arg.direction === 'in') signature += arg.type;
            }
            // add method
            this.$createMethod(methodName, signature, args);
        }
        for (let p = 0; iface.property && p < iface.property.length; ++p) {
            let property = iface.property[p];
            this.$createProp(property['$'].name, property['$'].type, property['$'].access)
        }
        for (let s = 0; iface.signal && s < iface.signal.length; ++s) {
            let signal = iface.signal[s];
            let args = [];
            for (let argx of signal.arg || []) {
                args.push(argx['$']);
            }
            this.$createSignal(signal['$'].name, args)
        }

    }

    private $getSigHandler(callback) {
        let index;
        if ((index = this.$callbacks.indexOf(callback)) === -1) {
            index = this.$callbacks.push(callback) - 1;
            this.$sigHandlers[index] = function(messageBody) {
                callback.apply(null, messageBody);
            };
        }
        return this.$sigHandlers[index];
    }

    async on(signame: string, callback) { return await this.addListener(signame, callback); }
    async off(signame: string, callback) { return await this.removeListener(signame, callback); }

    async addListener(signame, callback) {
        // http://dbus.freedesktop.org/doc/api/html/group__DBusBus.html#ga4eb6401ba014da3dbe3dc4e2a8e5b3ef
        // An example is "type='signal',sender='org.freedesktop.DBus', interface='org.freedesktop.DBus',member='Foo', path='/bar/foo',destination=':452345.34'" ...
        let bus = this.$parent.service.bus;
        let signalFullName = bus.mangle(this.$parent.name, this.$name, signame);
        if (!bus.signals.listeners(signalFullName).length) {
            // This is the first time, so call addMatch
            let match = getMatchRule(this.$parent.name, this.$name, signame);
            await bus.dbus().then(d => d.AddMatch(match))
            bus.signals.on(signalFullName, this.$getSigHandler(callback));
        } else {
            bus.signals.on(signalFullName, this.$getSigHandler(callback));
        }
    }

    async removeListener(signame, callback) {
        let bus = this.$parent.service.bus;
        let signalFullName = bus.mangle(this.$parent.name, this.$name, signame);
        bus.signals.removeListener(signalFullName, this.$getSigHandler(callback) );
        if (!bus.signals.listeners(signalFullName).length) {
            // There is no event handlers for this match
            let match = getMatchRule(this.$parent.name, this.$name, signame);
            await bus.dbus().then(d => (<DBusInterface&{RemoveMatch:(m:string)=>Promise<[]>}>d).RemoveMatch(match))

            this.$callbacks.length = 0;
            this.$sigHandlers.length = 0;
        }
    }

    private $createMethod(mName, signature, args) {
        this.$methods[mName] = signature
        this.$methodArgs[mName] = args
        this[mName] = async (...args) => await this.$callMethod(mName, args);
    }

    private async $callMethod(mName, args): Promise<any> {
        let bus = this.$parent.service.bus;
        if (!Array.isArray(args)) args = Array.from(args); // Array.prototype.slice.apply(args)
        let msg: Message = {
            destination: this.$parent.service.name,
            path: this.$parent.name,
            interface: this.$name,
            member: mName
        };
        if (this.$methods[mName] !== '') {
            msg.signature = this.$methods[mName];
            msg.body = args;
        }
        return await bus.invoke(msg);
    }

    private $createProp(propName: string, propType: string, propAccess: 'read'|'write'|'readwrite') {
        this.$properties[propName] = { type: propType, access: propAccess };
        Object.defineProperty(this, propName, {
            enumerable: true,
            get: () => this.$readProp(propName),
            set: (val) => this.$writeProp(propName, val).catch(err => console.error(err)),
        });
    }

    private async $readProp(propName): Promise<any> {
        let val = await this.$parent.service.bus.invoke({
            destination: this.$parent.service.name,
            path: this.$parent.name,
            interface: 'org.freedesktop.DBus.Properties',
            member: 'Get',
            signature: 'ss',
            body: [this.$name, propName]
        });
        if (Array.isArray(val) && val.length == 1) {
            return val[0];
        }
        return val;
    }

    private async $writeProp(propName, val): Promise<void> {
        if (isPromise(val)) {
            val = await val;
        }

        return await this.$parent.service.bus.invoke({
            destination: this.$parent.service.name,
            path: this.$parent.name,
            interface: 'org.freedesktop.DBus.Properties',
            member: 'Set',
            signature: 'ssv',
            body: [this.$name, propName, [this.$properties[propName].type, val]]
        })
    }

    private $createSignal(mName, args) {
        this.$signals[mName] = args
    }

}

function getMatchRule(objName: string, ifName: string, signame: string) {
    return `type='signal',path='${objName}',interface='${ifName}',member='${signame}'`;
}
