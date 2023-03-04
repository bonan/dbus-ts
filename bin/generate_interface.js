
const systemBus = require('../lib/index.js').systemBus;
const writeFile = require('fs/promises').writeFile;
const generateFromBus = require('../lib/generator/index.js').generateFromBus;

const fail = err => {
    console.error(e);
    process.exit(1);
}

const ignoreSvc = [];

systemBus()
    .then(bus => generateFromBus(bus, ignoreSvc), fail)
    .then(str => writeFile('src/interface.ts', str), fail)
    .then(() => process.exit(0), fail)
