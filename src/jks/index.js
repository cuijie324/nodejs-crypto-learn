const jksreader = require('jksreader');
const path = require('path');
const fs = require('fs');

let res = jksreader.parse(fs.readFileSync(path.join(__dirname, 'kafka.keystore')));
console.log(res.material.length);

let str = jksreader.decode(res.material.data, 'kafka1234567');
console.log(str);
