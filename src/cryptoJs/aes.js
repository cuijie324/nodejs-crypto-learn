let CryptoJS = require('crypto-js');
const { enc } = require('crypto-js');
let algo = 'aes-256-cbc';

let token = 'd6e6b1713bf00d8dcbc49054aa97ac9a0ca62001f6261400b0ed46039e986478';
let secret = 'MhfFWU0jieW5vCvlwSMxVqqe3fOzVApCatBSPvPvxti';
let plaintext = '0cc8e6181daed0fbebccf37c1bea549';

// var encrypted = CryptoJS.AES.encrypt(plaintext, secret);
// console.log(encrypted);

// const key = CryptoJS.enc.Utf8.parse(secret);
console.log('明文', plaintext);
var encrypted = CryptoJS.AES.encrypt(plaintext, secret, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

// console.log(encrypted.key, encrypted.plaintext, encrypted.ciphertext);
// var part3 = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
// console.log('>>>>>>>', part3, Buffer.from(part3, 'base64').toString());
let ciphertext = encrypted.ciphertext.toString();
console.log('密文', ciphertext);//36b86a709560d2066c88c66a29086e67a00f67a81d5f2ccb996619f410a1c794

var decrypted = CryptoJS.AES.decrypt(encrypted, secret, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
// var part3 = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
console.log('解密后的明文', decrypted.toString());

// var part3 = CryptoJS.enc.Base64.stringify(decrypted);
// console.log('decrypted', decrypted.toString(), part3);
