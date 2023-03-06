import {default as put} from '@homebridge/put';
import {default as Long} from '@homebridge/long';

import {parseSignature} from "./signature";
import {Writable} from "stream";

interface Put {
  _offset: number
  put(buf: Buffer): this
  word8(x: number): this
  floatle(x: number): this
  word8be(x: number): this
  word8le(x: number): this
  word16be(x: number): this
  word16le(x: number): this
  word24be(x: number): this
  word24le(x: number): this
  word32be(x: number): this
  word32le(x: number): this
  word64be(x: number): this
  word64le(x: number): this
  pad(bytes: number): this
  length(): number
  buffer(): Buffer
  write(stream: Writable): void
}

export function marshall(signature, data, offset?) {
  if (typeof offset === 'undefined') offset = 0;
  let tree = parseSignature(signature);
  if (!Array.isArray(data) || data.length !== tree.length) {
    throw new Error(
        `message body does not match message signature. Body:${JSON.stringify(
            data
        )}, signature:${signature}`
    );
  }
  let putstream: Put = put();
  putstream._offset = offset;
  let buf = writeStruct(putstream, tree, data).buffer();
  return buf;
};

function align(ps: Put, n: number) {
  let pad = n - ps._offset % n;
  if (pad === 0 || pad === n) return;
  // TODO: write8(0) in a loop (3 to 7 times here) could be more efficient
  let padBuff = Buffer.alloc(pad);
  ps.put(Buffer.from(padBuff));
  ps._offset += pad;
}

// TODO: serialise JS objects as a{sv}
//function writeHash(ps, treeKey, treeVal, data) {
//
//}

function writeStruct(ps: Put, tree, data) {
  if (tree.length !== data.length) {
    throw new Error('Invalid struct data');
  }
  for (let i = 0; i < tree.length; ++i) {
    write(ps, tree[i], data[i]);
  }
  return ps;
}

function write(ps: Put, ele, data) {
  switch (ele.type) {
    case '(':
    case '{':
      align(ps, 8);
      writeStruct(ps, ele.child, data);
      break;
    case 'a':
      // array serialisation:
      // length of array body aligned at 4 byte boundary
      // (optional 4 bytes to align first body element on 8-byte boundary if element
      // body
      let arrPut = put();
      arrPut._offset = ps._offset;
      let _offset = arrPut._offset;
      writeSimple(arrPut, 'u', 0); // array length placeholder
      let lengthOffset = arrPut._offset - 4 - _offset;
      // we need to alighn here because alignment is not included in array length
      if (['x', 't', 'd', '{', '('].indexOf(ele.child[0].type) !== -1)
        align(arrPut, 8);
      let startOffset = arrPut._offset;
      for (let i = 0; i < data.length; ++i)
        write(arrPut, ele.child[0], data[i]);
      let arrBuff = arrPut.buffer();
      let length = arrPut._offset - startOffset;
      // lengthOffset in the range 0 to 3 depending on number of align bytes padded _before_ arrayLength
      arrBuff.writeUInt32LE(length, lengthOffset);
      ps.put(arrBuff);
      ps._offset += arrBuff.length;
      break;
    case 'v':
      // TODO: allow serialisation of simple types as variants, e. g 123 -> ['u', 123], true -> ['b', 1], 'abc' -> ['s', 'abc']
      if (data.length !== 2) throw new Error('variant data should be [signature, data]');
      let signatureEle = {
        type: 'g',
        child: []
      };
      write(ps, signatureEle, data[0]);
      let tree = parseSignature(data[0]);
      if (tree.length !== 1) throw new Error('variant data should contain exactly 1 item');
      write(ps, tree[0], data[1]);
      break;
    default:
      return writeSimple(ps, ele.type, data);
  }
}

let stringTypes = ['g', 'o', 's'];

function writeSimple(ps: Put, type, data) {
  if (typeof data === 'undefined')
    throw new Error(
        "Serialisation of JS 'undefined' type is not supported by d-bus"
    );
  if (data === null)
    throw new Error('Serialisation of null value is not supported by d-bus');

  if (Buffer.isBuffer(data)) data = data.toString(); // encoding?
  if (stringTypes.indexOf(type) !== -1 && typeof data !== 'string') {
    throw new Error(
        `Expected string or buffer argument, got ${JSON.stringify(
            data
        )} of type '${type}'`
    );
  }

  let simpleMarshaller = MakeSimpleMarshaller(type);
  simpleMarshaller.marshall(ps, data);
  return ps;
}


/**
 * MakeSimpleMarshaller
 * @param signature - the signature of the data you want to check
 * @returns a simple marshaller with the "check" method
 *
 * check returns nothing - it only raises errors if the data is
 * invalid for the signature
 */
export function MakeSimpleMarshaller(signature: string) {
  let marshaller: any = {};
  function checkValidString(data) {
    if (typeof data !== 'string') {
      throw new Error(`Data: ${data} was not of type string`);
    } else if (data.indexOf('\0') !== -1) {
      throw new Error('String contains null byte');
    }
  }

  function checkValidSignature(data) {
    if (data.length > 0xff) {
      throw new Error(
          `Data: ${data} is too long for signature type (${data.length} > 255)`
      );
    }

    let parenCount = 0;
    for (let ii = 0; ii < data.length; ++ii) {
      if (parenCount > 32) {
        throw new Error(
            `Maximum container type nesting exceeded in signature type:${data}`
        );
      }
      switch (data[ii]) {
        case '(':
          ++parenCount;
          break;
        case ')':
          --parenCount;
          break;
        default:
          /* no-op */
          break;
      }
    }
    parseSignature(data);
  }

  switch (signature) {
    case 'o':
      // object path
      // TODO: verify object path here?
    case 's': // eslint-disable-line no-fallthrough
      //STRING
      marshaller.check = function(data) {
        checkValidString(data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        // utf8 string
        align(ps, 4);
        const buff = Buffer.from(data, 'utf8');
        ps
            .word32le(buff.length)
            .put(buff)
            .word8(0);
        ps._offset += 5 + buff.length;
      };
      break;
    case 'g':
      //SIGNATURE
      marshaller.check = function(data) {
        checkValidString(data);
        checkValidSignature(data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        // signature
        const buff = Buffer.from(data, 'ascii');
        ps
            .word8(data.length)
            .put(buff)
            .word8(0);
        ps._offset += 2 + buff.length;
      };
      break;
    case 'y':
      //BYTE
      marshaller.check = function(data) {
        checkInteger(data);
        checkRange(0x00, 0xff, data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        ps.word8(data);
        ps._offset++;
      };
      break;
    case 'b':
      //BOOLEAN
      marshaller.check = function(data) {
        checkBoolean(data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        // booleans serialised as 0/1 unsigned 32 bit int
        data = data ? 1 : 0;
        align(ps, 4);
        ps.word32le(data);
        ps._offset += 4;
      };
      break;
    case 'n':
      //INT16
      marshaller.check = function(data) {
        checkInteger(data);
        checkRange(-0x7fff - 1, 0x7fff, data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        align(ps, 2);
        const buff = Buffer.alloc(2);
        buff.writeInt16LE(parseInt(data), 0);
        ps.put(buff);
        ps._offset += 2;
      };
      break;
    case 'q':
      //UINT16
      marshaller.check = function(data) {
        checkInteger(data);
        checkRange(0, 0xffff, data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        align(ps, 2);
        ps.word16le(data);
        ps._offset += 2;
      };
      break;
    case 'i':
      //INT32
      marshaller.check = function(data) {
        checkInteger(data);
        checkRange(-0x7fffffff - 1, 0x7fffffff, data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        align(ps, 4);
        const buff = Buffer.alloc(4);
        buff.writeInt32LE(parseInt(data), 0);
        ps.put(buff);
        ps._offset += 4;
      };
      break;
    case 'u':
      //UINT32
      marshaller.check = function(data) {
        checkInteger(data);
        checkRange(0, 0xffffffff, data);
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        // 32 t unsigned int
        align(ps, 4);
        ps.word32le(data);
        ps._offset += 4;
      };
      break;
    case 't':
      //UINT64
      marshaller.check = function(data) {
        return checkLong(data, false);
      };
      marshaller.marshall = function(ps: Put, data) {
        data = this.check(data);
        align(ps, 8);
        ps.word32le(data.low);
        ps.word32le(data.high);
        ps._offset += 8;
      };
      break;
    case 'x':
      //INT64
      marshaller.check = function(data) {
        return checkLong(data, true);
      };
      marshaller.marshall = function(ps: Put, data) {
        data = this.check(data);
        align(ps, 8);
        ps.word32le(data.low);
        ps.word32le(data.high);
        ps._offset += 8;
      };
      break;
    case 'd':
      //DOUBLE
      marshaller.check = function(data) {
        if (typeof data !== 'number') {
          throw new Error(`Data: ${data} was not of type number`);
        } else if (Number.isNaN(data)) {
          throw new Error(`Data: ${data} was not a number`);
        } else if (!Number.isFinite(data)) {
          throw new Error('Number outside range');
        }
      };
      marshaller.marshall = function(ps: Put, data) {
        this.check(data);
        align(ps, 8);
        const buff = Buffer.alloc(8);
        buff.writeDoubleLE(parseFloat(data), 0);
        ps.put(buff);
        ps._offset += 8;
      };
      break;
    default:
      throw new Error(`Unknown data type format: ${signature}`);
  }
  return marshaller;
}

let checkRange = function(minValue, maxValue, data) {
  if (data > maxValue || data < minValue) {
    throw new Error('Number outside range');
  }
};

let checkInteger = function(data) {
  if (typeof data !== 'number') {
    throw new Error(`Data: ${data} was not of type number`);
  }
  if (Math.floor(data) !== data) {
    throw new Error(`Data: ${data} was not an integer`);
  }
};

let checkBoolean = function(data) {
  if (!(typeof data === 'boolean' || data === 0 || data === 1))
    throw new Error(`Data: ${data} was not of type boolean`);
};

// This is essentially a tweaked version of 'fromValue' from Long.js with error checking.
// This can take number or string of decimal characters or 'Long' instance (or Long-style object with props low,high,unsigned).
let makeLong = function(val, signed) {
  if (val instanceof Long) return val;
  if (val instanceof Number) val = val.valueOf();
  if (typeof val === 'number') {
    try {
      // Long.js won't alert you to precision loss in passing more than 53 bit ints through a double number, so we check here
      checkInteger(val);
      if (signed) {
        checkRange(-0x1fffffffffffff, 0x1fffffffffffff, val);
      } else {
        checkRange(0, 0x1fffffffffffff, val);
      }
    } catch (e) {
      e.message += ' (Number type can only carry 53 bit integer)';
      throw e;
    }
    try {
      return Long.fromNumber(val, !signed);
    } catch (e) {
      e.message = `Error converting number to 64bit integer "${e.message}"`;
      throw e;
    }
  }
  if (typeof val === 'string' || val instanceof String) {
    let radix = 10;
    val = val.trim().toUpperCase(); // remove extra whitespace and make uppercase (for hex)
    if (val.substring(0, 2) === '0X') {
      radix = 16;
      val = val.substring(2);
    } else if (val.substring(0, 3) === '-0X') {
      // unusual, but just in case?
      radix = 16;
      val = `-${val.substring(3)}`;
    }
    val = val.replace(/^0+(?=\d)/, ''); // dump leading zeroes
    let data;
    try {
      data = Long.fromString(val, !signed, radix);
    } catch (e) {
      e.message = `Error converting string to 64bit integer '${e.message}'`;
      throw e;
    }
    // If string represents a number outside of 64 bit range, it can quietly overflow.
    // We assume if things converted correctly the string coming out of Long should match what went into it.
    if (data.toString(radix).toUpperCase() !== val)
      throw new Error(
          `Data: '${val}' did not convert correctly to ${
              signed ? 'signed' : 'unsigned'
          } 64 bit`
      );
    return data;
  }
  // Throws for non-objects, converts non-instanceof Long:
  try {
    return Long.fromBits(val.low, val.high, val.unsigned);
  } catch (e) {
    e.message = `Error converting object to 64bit integer '${e.message}'`;
    throw e;
  }
};

let checkLong = function(data, signed) {
  if (!Long.isLong(data)) {
    data = makeLong(data, signed);
  }

  // Do we enforce that Long.js object unsigned/signed match the field even if it is still in range?
  // Probably, might help users avoid unintended bugs?
  if (signed) {
    if (data.unsigned)
      throw new Error(
          'Longjs object is unsigned, but marshalling into signed 64 bit field'
      );
    if (data.gt(Long.MAX_VALUE) || data.lt(Long.MIN_VALUE)) {
      throw new Error(`Data: ${data} was out of range (64-bit signed)`);
    }
  } else {
    if (!data.unsigned)
      throw new Error(
          'Longjs object is signed, but marshalling into unsigned 64 bit field'
      );
    // NOTE: data.gt(Long.MAX_UNSIGNED_VALUE) will catch if Long.js object is a signed value but is still within unsigned range!
    //  Since we are enforcing signed type matching between Long.js object and field, this note should not matter.
    if (data.gt(Long.MAX_UNSIGNED_VALUE) || data.lt(0)) {
      throw new Error(`Data: ${data} was out of range (64-bit unsigned)`);
    }
  }
  return data;
};
