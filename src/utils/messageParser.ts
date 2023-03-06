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
    let state = 0; // 0: header, 1: fields + body
    let header, fieldsAndBody;
    let fieldsLength, fieldsLengthPadded;
    let fieldsAndBodyLength = 0;
    let bodyLength = 0;
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

                let messageBuffer = new DBusBuffer(fieldsAndBody, undefined, opts);
                let unmarshalledHeader = messageBuffer.readArray(
                    headerSignature[0].child[0],
                    fieldsLength
                );
                messageBuffer.align(3);
                let headerName;
                let message: Message = {};
                message.serial = header.readUInt32LE(8);

                for (let i = 0; i < unmarshalledHeader.length; ++i) {
                    headerName = headerTypeName[unmarshalledHeader[i][0]];
                    if (typeof opts.simple !== 'undefined' && !opts.simple) {
                        message[headerName] = unmarshalledHeader[i][1][1][0];
                    } else {
                        message[headerName] = unmarshalledHeader[i][1];
                    }
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

export function marshallMessage(message) {
    if (!message.serial) throw new Error('Missing or invalid serial');
    let flags = message.flags || 0;
    let type = message.type || messageType.methodCall;
    let bodyLength = 0;
    let bodyBuff;
    if (message.signature && message.body) {
        bodyBuff = marshall(message.signature, message.body);
        bodyLength = bodyBuff.length;
    }
    let header = [
        endianness.le,
        type,
        flags,
        protocolVersion,
        bodyLength,
        message.serial
    ];
    let headerBuff = marshall('yyyyuu', header);
    let fields = [];
    headerTypeName.forEach(function(fieldName) {
        let fieldVal = message[fieldName];
        if (fieldVal) {
            fields.push([
                headerTypeId[fieldName],
                [fieldSignature[fieldName], fieldVal]
            ]);
        }
    });
    let fieldsBuff = marshall('a(yv)', [fields], 12);
    let headerLenAligned =
        ((headerBuff.length + fieldsBuff.length + 7) >> 3) << 3;
    let messageLen = headerLenAligned + bodyLength;
    let messageBuff = Buffer.alloc(messageLen);
    headerBuff.copy(messageBuff);
    fieldsBuff.copy(messageBuff, headerBuff.length);
    if (bodyLength > 0) bodyBuff.copy(messageBuff, headerLenAligned);

    return messageBuff;
}
