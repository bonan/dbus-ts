import {MessageBus, DBusInterface} from "../";

export async function generateFromBus(bus: MessageBus, ignoreSvc?: string[]): Promise<string> {
    const dbusObj = await bus.getObject("org.freedesktop.DBus", "/org/freedesktop/DBus");
    const dbus = dbusObj.as("org.freedesktop.DBus");

    const ifDef: any = {};
    const services: { [name: string]: {service: string, object: null|string, interfaces: string[]} } = {};

    const [objectNames] = await (<DBusInterface&{ListActivatableNames:()=>Promise<[string[]]>}>dbus).ListActivatableNames();
    for (let svc of objectNames) {
        if (Array.isArray(ignoreSvc) && ignoreSvc.indexOf(svc) >= 0) {
            continue;
        }

        const parts = svc.split('.');
        let m = ifDef;
        for (let p of parts) {
            if (typeof m[p] === 'undefined') {
                m[p] = {};
            }
            m = m[p];
        }
        if (typeof m['_'] === 'undefined') {
            m['_'] = svc;
        }

        const ns = svc.replace(/^org\.freedesktop\./,'')
            .split('.')
            .map(v => v.substring(0,1).toUpperCase() + v.substring(1))
            .join('');

        services[ns] = {
            service: svc,
            object: null,
            interfaces: [],
        };

        const visited: string[] = [];
        const traverse = async (name: string, path: string) => {
            if (visited.indexOf(path) >= 0) return;
            let obj = await bus.getObject(name, path);
            if (obj.name) path = obj.name;
            for (let i of obj.interfaces()) {
                if (services[ns].object == null && path.replace(/\//g, '').startsWith(svc.replace(/\./g, ''))) {
                    services[ns].object = path;
                }

                if (services[ns].interfaces.indexOf(i) < 0) {
                    services[ns].interfaces.push(i);
                }
                const parts = i.split('.');
                let m = ifDef;
                for (let p of parts) {
                    if (typeof m[p] === 'undefined') {
                        m[p] = {};
                    }
                    m = m[p];
                }
                if (typeof m['@'] === 'undefined') {
                    m['@'] = obj.as(i).$createDefinition()
                }
            }
            //console.log(inf, path);

            visited.push(path);

            for (let node of obj.nodes()) {
                let nPath = path + (path.length>1 ? '/' : '') + node;
                try {
                    await traverse(name, nPath);
                } catch(e) {
                    //console.error(name, nPath, e);
                }
            }

        }
        try {
            await traverse(svc, '/');
        } catch(e) {
            //console.error(i, e);
        }
    }

    const searchTree = (path: string[], tree: any, key: string): [string[], any][] => {
        let out: [string[], any][] = [];
        if (typeof tree !== 'object') return out;
        for (let k in tree) {
            if (!tree.hasOwnProperty(k)) continue;
            out.push(...searchTree([...path, k], tree[k], key))
            if (k === key) {
                out.push([path, tree[k]])
            }
        }
        return out;
    }

    const walkTree = (path: string[], tree: any): string => {
        let out = '';
        if (typeof tree !== 'object') return out;
        if (typeof tree['@'] === 'string') {
            out = tree['@'];
        }
        let sub = '';
        for (let k in tree) {
            if (!tree.hasOwnProperty(k)) continue;
            if (['_', '@'].indexOf(k) >= 0) continue;
            sub += walkTree([...path, k], tree[k]);
        }
        if (path.length == 0) {
            out += sub;
        } else if (sub.length > 0) {
            let last = path[path.length-1];
            let ind = "  ".repeat((path.length||1)-1);
            out += `${ind}export namespace ${last} {\n${sub}${ind}}\n`;
        }

        return out;
    }

    const infMap = searchTree([], ifDef, '@');

    let out = `import {Type, ObjectPath} from './utils/signature'\n\n`;
    out += `export declare type Interfaces = {\n`;
    for (let [path, _] of infMap) {
        out += `  "${path.join('.')}": ${path.join('.')}\n`
    }
    out += `}\n`

    for (let svc in services) {
        if (!services.hasOwnProperty(svc)) continue;
        const s = services[svc];
        out += `// ${s.service}\n`
        out += `export namespace ${svc} {\n`;
        out += `  export const\n`
        out += `    Service = "${s.service}"`;
        if (s.object) {
            out += `,\n    Object = "${s.object}"`;
        }
        let out2 = '';
        for (let inf of s.interfaces) {
            if (!inf.startsWith(s.service)) continue;
            const parts = inf.split('.');
            let nn;
            if (inf == s.service) {
                nn = parts[parts.length-1];
            } else {
                nn = inf.substring(s.service.length+1)
                    .split('.')
                    .map(v => v.substring(0,1).toUpperCase() + v.substring(1))
                    .join('');
            }
            out += `,\n    I${nn} = "${inf}"`;
            out2 += `    export type I${nn} = ${inf};\n`;
        }
        out += `;\n`;
        out += out2;
        out += `}\n`;
    }

    out += walkTree([], ifDef)

    return out;
}
