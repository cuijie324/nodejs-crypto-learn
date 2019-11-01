const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

let test = {
    alg: 'aes-128-ecb',//分组长度16字节，密钥长度16字节
    key: Buffer.alloc(16).fill('aes-128'),
    iv: Buffer.alloc(0),//ecb模式不需要iv
    plaintext: 'fsfaksfasl;dfjsadf;dsafjas;dlfjsa;fkjsadl;fasjfls'
    // plaintext: fs.readFileSync('./iron.bmp')
}

let cipher = crypto.createCipheriv(test.alg, test.key, test.iv);
let encrypted = cipher.update(test.plaintext, null);
encrypted = Buffer.concat([encrypted, cipher.final()])
// console.log(encrypted);

// fs.writeFileSync(path.join(__dirname, 'iron2.jpg'), Buffer.from(encrypted));

let decipher = crypto.createDecipheriv(test.alg, test.key, test.iv);
let decrypted = decipher.update(encrypted);
decrypted = Buffer.concat([decrypted, decipher.final()])

console.log('>>>>', decrypted.toString())

// fs.writeFileSync(path.join(__dirname, 'iron3.jpg'), Buffer.from(decrypted));
