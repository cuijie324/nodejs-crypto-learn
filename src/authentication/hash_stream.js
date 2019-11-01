const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const hash = crypto.createHash('sha256');
let file = path.join(__dirname, '../../', 'package.json');

// hash.on('readable', () => {
//     const data = hash.read();
//     if (data) {
//         console.log(data.toString('ascii'));
//     }
// });

// hash.write(fs.readFileSync(file));
// hash.end();

let fileStream = fs.createReadStream(file);
let writeStream = fs.createWriteStream(path.join(__dirname, 'hash.txt'), { encoding: 'hex' });
fileStream.pipe(hash).pipe(writeStream);