import {Message} from "../message";
import {parseSignature} from "./signature";
import {messageType} from './constants';
import {MessageBus} from "../messageBus";

// TODO: use xmlbuilder

const xmlHeader = `<!DOCTYPE node PUBLIC "-//freedesktop//DTD D-BUS Object Introspection 1.0//EN"
    "http://www.freedesktop.org/standards/dbus/1.0/introspect.dtd">`;
let stdIfaces;

export function stdDbusIfaces(msg: Message, bus: MessageBus) {
  if (
    msg['interface'] === 'org.freedesktop.DBus.Introspectable' &&
    msg.member === 'Introspect'
  ) {
    if (msg.path === '/') msg.path = '';

    let resultXml = [xmlHeader];
    let nodes = {};
    // TODO: this is not very efficiant for large number of exported objects
    // need to build objects tree as they are exported and walk this tree on introspect request
    for (let path in bus.exportedObjects) {
      if (path.indexOf(msg.path) === 0) {
        // objects path starts with requested
        let introspectableObj = bus.exportedObjects[msg.path];
        if (introspectableObj) {
          nodes[msg.path] = introspectableObj;
        } else {
          if (path[msg.path.length] !== '/') continue;
          let localPath = path.substring(msg.path.length);
          let pathParts = localPath.split('/');
          let localName = pathParts[1];
          nodes[localName] = null;
        }
      }
    }

    let length = Object.keys(nodes).length;
    if (length === 0) {
      resultXml.push('<node/>');
    } else if (length === 1) {
      let obj = nodes[Object.keys(nodes)[0]];
      if (obj) {
        resultXml.push('<node>');
        for (let ifaceNode in obj) {
          resultXml.push(interfaceToXML(obj[ifaceNode][0]));
        }
        resultXml.push(stdIfaces);
        resultXml.push('</node>');
      } else {
        resultXml.push(
          `<node>\n  <node name="${Object.keys(nodes)[0]}"/>\n  </node>`
        );
      }
    } else {
      resultXml.push('<node>');
      for (let name in nodes) {
        if (nodes[name] === null) {
          resultXml.push(`  <node name="${name}" />`);
        } else {
          let obj = nodes[name];
          resultXml.push(`  <node name="${name}" >`);
          for (let ifaceName in obj) {
            resultXml.push(interfaceToXML(obj[ifaceName][0]));
          }
          resultXml.push(stdIfaces);
          resultXml.push('  </node>');
        }
      }
      resultXml.push('</node>');
    }

    const introspectableReply = {
      type: messageType.methodReturn,
      serial: bus.serial++,
      replySerial: msg.serial,
      destination: msg.sender,
      signature: 's',
      body: [resultXml.join('\n')]
    };
    bus.connection.message(introspectableReply);
    return 1;
  } else if (msg['interface'] === 'org.freedesktop.DBus.Properties') {
    let interfaceName = msg.body[0];
    let propertiesObj = bus.exportedObjects[msg.path];
    // TODO: !propertiesObj -> UnknownObject  http://www.freedesktop.org/wiki/Software/DBusBindingErrors
    if (!propertiesObj || !propertiesObj[interfaceName]) {
      // TODO:
      bus.sendError(
        msg,
        'org.freedesktop.DBus.Error.UnknownMethod',
        'Uh oh oh'
      );
      return 1;
    }
    let impl = propertiesObj[interfaceName][1];

    const propertiesReply: Message = {
      type: messageType.methodReturn,
      serial: bus.serial++,
      replySerial: msg.serial,
      destination: msg.sender
    };
    if (msg.member === 'Get' || msg.member === 'Set') {
      let propertyName = msg.body[1];
      let propType = propertiesObj[interfaceName][0].properties[propertyName];
      if (msg.member === 'Get') {
        let propValue = impl[propertyName];
        propertiesReply.signature = 'v';
        propertiesReply.body = [[propType, propValue]];
      } else {
        impl[propertyName] = 1234; // TODO: read variant and set property value
      }
    } else if (msg.member === 'GetAll') {
      propertiesReply.signature = 'a{sv}';
      let props = [];
      for (let p in propertiesObj[interfaceName][0].properties) {
        let propertySignature = propertiesObj[interfaceName][0].properties[p];
        props.push([p, [propertySignature, impl[p]]]);
      }
      propertiesReply.body = [props];
    }
    bus.connection.message(propertiesReply);
    return 1;
  } else if (msg['interface'] === 'org.freedesktop.DBus.Peer') {
    // TODO: implement bus.replyTo(srcMsg, signature, body) method
    const peerReply: Message = {
      type: messageType.methodReturn,
      serial: bus.serial++,
      replySerial: msg.serial,
      destination: msg.sender
    };
    if (msg.member === 'Ping') {
      // empty body
    } else if (msg.member === 'GetMachineId') {
      peerReply.signature = 's';
      peerReply.body = ['This is a machine id. TODO: implement'];
    }
    bus.connection.message(peerReply);
    return 1;
  }
  return 0;
}

// TODO: move to introspect.js
function interfaceToXML(iface) {
  let result = [];
  let dumpArgs = function(argsSignature, argsNames, direction) {
    if (!argsSignature) return;
    let args = parseSignature(argsSignature);
    args.forEach(function(arg, num) {
      let argName = argsNames ? argsNames[num] : direction + num;
      let dirStr = direction === 'signal' ? '' : `" direction="${direction}`;
      result.push(
        `      <arg type="${dumpSignature([arg])}" name="${argName}${
          dirStr
        }" />`
      );
    });
  };
  result.push(`  <interface name="${iface.name}">`);
  if (iface.methods) {
    for (let methodName in iface.methods) {
      let method = iface.methods[methodName];
      result.push(`    <method name="${methodName}">`);
      dumpArgs(method[0], method[2], 'in');
      dumpArgs(method[1], method[3], 'out');
      result.push('    </method>');
    }
  }
  if (iface.signals) {
    for (let signalName in iface.signals) {
      let signal = iface.signals[signalName];
      result.push(`    <signal name="${signalName}">`);
      dumpArgs(signal[0], signal.slice(1), 'signal');
      result.push('    </signal>');
    }
  }
  if (iface.properties) {
    for (const propertyName in iface.properties) {
      // TODO: decide how to encode access
      result.push(
        `    <property name="${propertyName}" type="${
          iface.properties[propertyName]
        }" access="readwrite"/>`
      );
    }
  }
  result.push('  </interface>');
  return result.join('\n');
}

function dumpSignature(s) {
  let result = [];
  s.forEach(function(sig) {
    result.push(sig.type + dumpSignature(sig.child));
    if (sig.type === '{') result.push('}');
    if (sig.type === '(') result.push(')');
  });
  return result.join('');
}
stdIfaces = `
  <interface name="org.freedesktop.DBus.Properties">
    <method name="Get">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="s" name="property_name" direction="in"/>
      <arg type="v" name="value" direction="out"/>
    </method>
    <method name="GetAll">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="a{sv}" name="properties" direction="out"/>
    </method>
    <method name="Set">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="s" name="property_name" direction="in"/>
      <arg type="v" name="value" direction="in"/>
    </method>
    <signal name="PropertiesChanged">
      <arg type="s" name="interface_name"/>
      <arg type="a{sv}" name="changed_properties"/>
      <arg type="as" name="invalidated_properties"/>
    </signal>
  </interface>
  <interface name="org.freedesktop.DBus.Introspectable">
    <method name="Introspect">
      <arg type="s" name="xml_data" direction="out"/>
    </method>
  </interface>
  <interface name="org.freedesktop.DBus.Peer">
    <method name="Ping"/>
    <method name="GetMachineId">
      <arg type="s" name="machine_uuid" direction="out"/>
    </method>
  </interface>
`;
