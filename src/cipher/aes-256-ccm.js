const crypto = require('crypto');

let alg = 'aes-256-ccm';
let key = Buffer.alloc(32).fill('aes');
let iv = Buffer.alloc(13);
let plaintext = 'hello aes-256-ccm';
let aad = Buffer.from('aaaaa', 'utf8');

const cipher = crypto.createCipheriv(alg, key, iv, { authTagLength: 4 });
cipher.setAAD(aad, { plaintextLength: Buffer.byteLength(plaintext) });
let encrypted = cipher.update(plaintext, 'ascii', 'hex');
encrypted += cipher.final('hex');

let tag = cipher.getAuthTag();

console.log(encrypted, tag);

const decipher = crypto.createDecipheriv(alg, key, iv, { authTagLength: 4 });
decipher.setAuthTag(tag);
decipher.setAAD(aad, { plaintextLength: Buffer.byteLength(encrypted, 'hex') });
let decrypted = decipher.update(encrypted, 'hex', 'utf8');

try {
    decrypted += decipher.final('utf8');
} catch (err) {
    console.log('auth failed');
}

console.log(decrypted);
