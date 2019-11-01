const crypto = require('crypto');
const fs = require('fs');

const buff = Buffer.from('hello public-key cryptography');

// const privateKey = fs.readFileSync('./private.pem').toString();
// const publicKey = fs.readFileSync('./public.pem').toString();

//公钥加密，私钥解密
// let publicEncrypted = crypto.publicEncrypt(publicKey, buff);
// let privateDecrypted = crypto.privateDecrypt(privateKey, publicEncrypted);
// console.log(privateDecrypted.toString());

//私钥加密，公钥解密
// let encrypted = crypto.privateEncrypt(privateKey, buff);
// let decrypted = crypto.publicDecrypt(publicKey, encrypted);
// console.log(decrypted.toString());

//私钥加密，私钥解密（因为可以由私钥推断出公钥）
// let privateEncrypted = crypto.privateEncrypt(privateKey, buff);
// let privateDecrypted = crypto.publicDecrypt(privateKey, privateEncrypted);

// console.log(privateDecrypted.toString());

//带密码的私钥
const privateKey = fs.readFileSync('./pri.pem').toString();
const publicKey = fs.readFileSync('./pub.pem').toString();

//公钥加密，私钥解密
let publicEncrypted = crypto.publicEncrypt(publicKey, buff);
let privateDecrypted = crypto.privateDecrypt({ key: privateKey, passphrase: '123456' }, publicEncrypted);
console.log(privateDecrypted.toString());
