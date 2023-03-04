import {Message} from "./message";
import {DBusObject} from "./dbusObject";
import {MessageBus} from "./messageBus";
import {nativeType} from "./utils/signature";
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
        for (var p = 0; iface.property && p < iface.property.length; ++p) {
            let property = iface.property[p];
            this.$createProp(property['$'].name, property['$'].type, property['$'].access)
        }
        for (var s = 0; iface.signal && s < iface.signal.length; ++s) {
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
            var match = getMatchRule(this.$parent.name, this.$name, signame);
            await bus.dbus().then(d => (<DBusInterface&{AddMatch:(m:string)=>Promise<[]>}>d).AddMatch(match))
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
        let signature = val[0][0];
        if (signature.length === 1) {
            return val[0][1][0];
        }
        return val[0][1];
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

    $createDefinition(): string {

        const resv = (v: string) => {
            switch (v) {
                case 'class': return 'cls'
                default: return v
            }
        }

        /*const nativeType = (v) => {
            const sig = parseSignature(v);
            console.log(v, parseSignature(v));
            return `any(${v})`
        }*/

        const parts = this.$name.split('.')
        const ifName = parts[parts.length-1];
        const ind = '  '.repeat(parts.length-1);

        //let out = `${ind}export const ${ifName} = "${this.$name}";\n`
        let out = `${ind}export interface ${ifName} \{\n`;

        for (let k in this.$signals) {
            if (!this.$signals.hasOwnProperty(k)) continue;
            const s = this.$signals[k];
            const sig = [];
            let i = 0;
            for (let v of s) {
                sig.push(`${resv(v.name||'v'+(i++))}: ${nativeType(v.type)}/*${v.type}*/`)
            }
            out += `${ind}  on(ev: "${k}", cb: (${sig.join(', ')}) => void)\n`;

        }
        for (let k in this.$properties) {
            if (!this.$properties.hasOwnProperty(k)) continue;
            const s = this.$properties[k];
            if (s.access == 'read' || s.access == 'readwrite') {
                out += `${ind}  get ${k}(): Promise<${nativeType(s.type)}> /*${s.type}*/\n`;
            }
            if (s.access == 'write' || s.access == 'readwrite') {
                out += `${ind}  set ${k}(v: ${nativeType(s.type, true)} /* Don't use: */|Promise<${nativeType(s.type)}>)\n`;
            }
        }
        for (let k in this.$methodArgs) {
            if (!this.$methodArgs.hasOwnProperty(k)) continue;
            const s = this.$methodArgs[k];
            const sig = [];
            const sigRet = [];
            const sigRetNames = [];
            let i = 0;
            for (let v of s) {
                if (v.direction === 'in') {
                    sig.push(`${resv(v.name||'v'+(i++))}: ${nativeType(v.type, true)}/*${v.type}*/`)
                } else {
                    sigRet.push(`${v.name ? '/*' + v.name + '*/' : ''}${nativeType(v.type)}/*${v.type}*/`)
                    //sigRetNames.push(v.name);
                }
            }
            out += `${ind}  ${k}(${sig.join(', ')}): Promise<[${sigRet.join(', ')}]>\n`;

        }
        out += `${ind}}\n`

        return out;
    }

}

function getMatchRule(objName: string, ifName: string, signame: string) {
    return `type='signal',path='${objName}',interface='${ifName}',member='${signame}'`;
}
