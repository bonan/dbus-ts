
import {DBusBuffer} from "./dbusBuffer";

export function unmarshall(buffer, signature, startPos, options) {
  if (!startPos) startPos = 0;
  if (signature === '') return Buffer.from('');
  var dbuff = new DBusBuffer(buffer, startPos, options);
  return dbuff.read(signature);
}
