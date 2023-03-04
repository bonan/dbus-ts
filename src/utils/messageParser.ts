import {Message} from "../message";
import {DBusBuffer} from "./dbusBuffer";
import {endianness, fieldSignature, headerTypeId, headerTypeName, messageType, protocolVersion} from "./constants";
import {marshall} from "./marshall";

const headerSignature = [{
    "type": "a",
    "child": [{
        "type": "(",
        "child": [
            {"type": "y","child": []},
            {"type": "v","child": []}
        ]
    }]
}];

export function messageParser(
    stream,
    onMessage,
    opts
) {
    var state = 0; // 0: header, 1: fields + body
    var header, fieldsAndBody;
    var fieldsLength, fieldsLengthPadded;
    var fieldsAndBodyLength = 0;
    var bodyLength = 0;
    stream.on('readable', function() {
        while (1) {
            if (state === 0) {
                header = stream.read(16);
                if (!header) break;
                state = 1;

                fieldsLength = header.readUInt32LE(12);
                fieldsLengthPadded = ((fieldsLength + 7) >> 3) << 3;
                bodyLength = header.readUInt32LE(4);
                fieldsAndBodyLength = fieldsLengthPadded + bodyLength;
            } else {
                fieldsAndBody = stream.read(fieldsAndBodyLength);
                if (!fieldsAndBody) break;
                state = 0;

                var messageBuffer = new DBusBuffer(fieldsAndBody, undefined, opts);
                var unmarshalledHeader = messageBuffer.readArray(
                    headerSignature[0].child[0],
                    fieldsLength
                );
                messageBuffer.align(3);
                var headerName;
                var message: Message = {};
                message.serial = header.readUInt32LE(8);

                for (var i = 0; i < unmarshalledHeader.length; ++i) {
                    headerName = headerTypeName[unmarshalledHeader[i][0]];
                    message[headerName] = unmarshalledHeader[i][1][1][0];
                }

                message.type = header[1];
                message.flags = header[2];

                if (bodyLength > 0 && message.signature) {
                    message.body = messageBuffer.read(message.signature);
                }
                onMessage(message);
            }
        }
    });
}

// given buffer which contains entire message deserialise it
// TODO: factor out common code
export function unmarshall(buff, opts) {
    var msgBuf = new DBusBuffer(buff, undefined, opts);
    var headers = msgBuf.read('yyyyuua(yv)');
    var message: Message = {};
    for (var i = 0; i < headers[6].length; ++i) {
        var headerName = headerTypeName[headers[6][i][0]];
        message[headerName] = headers[6][i][1][1][0];
    }
    message.type = headers[1];
    message.flags = headers[2];
    message.serial = headers[5];
    msgBuf.align(3);
    message.body = msgBuf.read(message.signature);
    return message;
}

export function marshallMessage(message) {
    if (!message.serial) throw new Error('Missing or invalid serial');
    var flags = message.flags || 0;
    var type = message.type || messageType.methodCall;
    var bodyLength = 0;
    var bodyBuff;
    if (message.signature && message.body) {
        bodyBuff = marshall(message.signature, message.body);
        bodyLength = bodyBuff.length;
    }
    var header = [
        endianness.le,
        type,
        flags,
        protocolVersion,
        bodyLength,
        message.serial
    ];
    var headerBuff = marshall('yyyyuu', header);
    var fields = [];
    headerTypeName.forEach(function(fieldName) {
        var fieldVal = message[fieldName];
        if (fieldVal) {
            fields.push([
                headerTypeId[fieldName],
                [fieldSignature[fieldName], fieldVal]
            ]);
        }
    });
    var fieldsBuff = marshall('a(yv)', [fields], 12);
    var headerLenAligned =
        ((headerBuff.length + fieldsBuff.length + 7) >> 3) << 3;
    var messageLen = headerLenAligned + bodyLength;
    var messageBuff = Buffer.alloc(messageLen);
    headerBuff.copy(messageBuff);
    fieldsBuff.copy(messageBuff, headerBuff.length);
    if (bodyLength > 0) bodyBuff.copy(messageBuff, headerLenAligned);

    return messageBuff;
}
