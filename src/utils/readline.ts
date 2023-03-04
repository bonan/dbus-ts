import {Readable} from "stream";

export function readLine(stream: Readable): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        let bytes = [];
        function readable() {
            while (1) {
                let buf = stream.read(1);
                if (!buf) return;
                let b = buf[0];
                if (b === 0x0a) {
                    try {
                        resolve(Buffer.from(bytes));
                    } catch (error) {
                        reject(error);
                    } finally {
                        stream.removeListener('readable', readable);
                    }
                    return;
                }
                bytes.push(b);
            }
        }
        stream.on('readable', readable);
    })
}
