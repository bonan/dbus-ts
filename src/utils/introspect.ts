
import {Parser} from 'xml2js';
import {DBusInterface} from "../dbusInterface";
import {DBusObject} from "../dbusObject";

export async function introspectBus<T>(obj: DBusObject): Promise<[string, {[name: string]:DBusInterface&T}, string[]]> {
  const xml = await obj?.service?.bus?.invoke({
    destination: obj.service.name,
    path: obj.name,
    interface: 'org.freedesktop.DBus.Introspectable',
    member: 'Introspect'
  })
  if (!xml) throw new Error('unable to introspect');
  return await processXML(xml, obj);
}

export async function processXML<T>(xml, obj: DBusObject): Promise<[string, {[name: string]:DBusInterface&T}, string[]]> {
  const parser = new Parser();
  let result = await parser.parseStringPromise(xml);
  if (!result.node) throw new Error('No root XML node');
  result = result.node; // unwrap the root node
  // If no interface, try first sub node?
  if (!result.interface) {
    if (result.node && result.node.length > 0 && result.node[0]['$']) {
      let subObj: DBusObject = Object.assign(obj, {});
      if (subObj.name.slice(-1) !== '/') subObj.name += '/';
      subObj.name += result.node[0]['$'].name;
      return await introspectBus(subObj);
    }
    throw new Error('No such interface found');
  }
  const proxy: {[name: string]: DBusInterface&T} = {};
  const nodes: string[] = [];
  let ifaceName;
  const ifaces = result['interface'];
  const xmlnodes = result['node'] || [];

  for (let node of xmlnodes) {
    if (node && node['$'] && node['$']['name']) {
      nodes.push(node['$']['name']);
    }
  }

  for (let iface of ifaces) {
    ifaceName = iface['$'].name;
    proxy[ifaceName] = <DBusInterface&T>new DBusInterface(obj, iface);
  }
  return [obj.name, proxy, nodes];
}
