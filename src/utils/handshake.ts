import {createHash, randomBytes} from 'crypto';
import {readFile, stat,} from 'fs/promises';
import {join as pathJoin} from 'path';

import {readLine} from "./readline";
import * as constants from './constants';

function sha1(input) {
    var shasum = createHash('sha1');
    shasum.update(input);
    return shasum.digest('hex');
}

function getUserHome() {
    return process.env[process.platform.match(/\$win/) ? 'USERPROFILE' : 'HOME'];
}

async function getCookie(context: string, id: string): Promise<any> {
    // http://dbus.freedesktop.org/doc/dbus-specification.html#auth-mechanisms-sha
    let dirname = pathJoin(getUserHome(), '.dbus-keyrings');
    // > There is a default context, "org_freedesktop_general" that's used by servers that do not specify otherwise.
    if (context.length === 0) context = 'org_freedesktop_general';

    var filename = pathJoin(dirname, context);
    const s = await stat(dirname);
    // check it's not writable by others and readable by user
    if (s.mode & 0o22) {
        throw new Error('User keyrings directory is writeable by other users. Aborting authentication')
    }
    if (process.hasOwnProperty('getuid') && s.uid !== process.getuid()) {
        throw new Error('Keyrings directory is not owned by the current user. Aborting authentication!');
    }
    const keyrings = await readFile(filename, {encoding: 'ascii'});

    const lines = keyrings.split('\n');
    for (let l = 0; l < lines.length; ++l) {
        let data = lines[l].split(' ');
        if (data.length > 2 && id === data[0]) return data[2];
    }
    throw new Error('cookie not found');
}

function hexlify(input) {
    return Buffer.from(input.toString(), 'ascii').toString('hex');
}

export interface AuthOpts {
    authMethods?: string[]
    uid?: number
}

export async function clientHandshake(stream, opts?: AuthOpts): Promise<string> {
    let authMethods = opts?.authMethods || constants.defaultAuthMethods;
    stream.write('\0')

    let uid: number = opts?.uid;
    if (typeof uid === 'undefined') {
        uid = process?.hasOwnProperty('getuid') ? process.getuid() : 0;
    }
    let id = hexlify(uid);
    let lastErr;

    for (let m of authMethods) {
        try {
            return await tryAuth(stream, m, id)
        } catch (e) {
            lastErr = e;
        }
    }
    throw lastErr || new Error("no auth methods available");
}

async function tryAuth(stream, authMethod, id: string): Promise<string> {

    const successAndBegin = async (): Promise<string> => {
        const line: Buffer = await readLine(stream);
        const ok: RegExpMatchArray = line.toString('ascii').match(/^([A-Za-z]+) (.*)/);
        if (ok && ok.length > 2 && ok[1] === 'OK') {
            stream.write('BEGIN\r\n');
            return ok[2]; // ok[2] = guid. Do we need it?
        }
        throw new Error(line.toString('ascii'))
    }

    switch (authMethod) {
        case 'EXTERNAL':
            stream.write(`AUTH ${authMethod} ${id}\r\n`);
            return await successAndBegin();
        case 'DBUS_COOKIE_SHA1':
            stream.write(`AUTH ${authMethod} ${id}\r\n`);
            const line = await readLine(stream);
            let data = Buffer.from(line.toString().split(' ')[1].trim(),'hex')
                    .toString().split(' ');
            let cookieContext = data[0];
            let cookieId = data[1];
            let serverChallenge = data[2];
            // any random 16 bytes should work, sha1(rnd) to make it simplier
            let clientChallenge = randomBytes(16).toString('hex');
            let cookie = await getCookie(cookieContext, cookieId);
            let response = sha1([serverChallenge, clientChallenge, cookie].join(':'));
            let reply = hexlify(clientChallenge + response);
            stream.write(`DATA ${reply}\r\n`);
            return await successAndBegin();
        case 'ANONYMOUS':
            stream.write('AUTH ANONYMOUS \r\n');
            return await successAndBegin();
        default:
            throw new Error(`Unsupported auth method: ${authMethod}`);
    }
}
