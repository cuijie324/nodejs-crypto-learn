const crypto = require('crypto');

// let test = {
//     alg: 'des', //就是des-cbc
//     key: Buffer.alloc(8).fill('desdes'),
//     iv: Buffer.alloc(8),
//     plaintext: Buffer.alloc(8).fill('hellodes')
// }

let test = {
    alg: 'des-cbc',
    key: Buffer.alloc(8).fill('desdes'),
    iv: Buffer.alloc(8),
    plaintext: Buffer.alloc(8).fill('hellodes')
}

let cipher = crypto.createCipheriv(test.alg, test.key, test.iv);
let encrypted = cipher.update(test.plaintext, 'utf8');
encrypted = Buffer.concat([encrypted, cipher.final()]);

console.log(test.plaintext);
console.log(encrypted);

let decipher = crypto.createDecipheriv(test.alg, test.key, test.iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log(decrypted);
