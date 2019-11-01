const crypto = require('crypto');
const fs = require('fs');

let test = {
    alg: 'des-ecb',
    key: Buffer.alloc(8).fill('desdes'),
    iv: null,
    plaintext: Buffer.alloc(24)
}

let cipher = crypto.createCipheriv(test.alg, test.key, test.iv);
let encrypted = cipher.update(test.plaintext, 'utf8');
encrypted = Buffer.concat([encrypted, cipher.final()]);

console.log(test.plaintext);
console.log(encrypted);
fs.writeFileSync(__dirname + '/des.txt', encrypted.toString('hex'));

let decipher = crypto.createDecipheriv(test.alg, test.key, test.iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log(decrypted);
