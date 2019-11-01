const crypto = require('crypto');

//aes192: 分组长度16字节，密钥长度24字节
const key = 'keykeykeykeykeykeykeykey';//密钥，24个字符
const nonce = crypto.randomBytes(12);//iv，长度[7, 13]

const aad = Buffer.from('0123456789', 'hex');

//加密
const cipher = crypto.createCipheriv('aes-192-ccm', key, nonce, {
    authTagLength: 16 //认证标签长度要设置，可选值：4 6 8 10 12 14 16
});
const plaintext = 'Hello world';
cipher.setAAD(aad, {
    plaintextLength: Buffer.byteLength(plaintext) //附加AAD时，要指明明文长度
});
const ciphertext = cipher.update(plaintext, 'utf8'); //只能调用一次
cipher.final();
const tag = cipher.getAuthTag();

// Now transmit { ciphertext, nonce, tag }.

//解密
const decipher = crypto.createDecipheriv('aes-192-ccm', key, nonce, {
    authTagLength: 16
});

decipher.setAuthTag(tag); //解密时要先调用这个
decipher.setAAD(aad, {
    plaintextLength: ciphertext.length
});
const receivedPlaintext = decipher.update(ciphertext, null, 'utf8');

try {
    decipher.final();
} catch (err) {
    console.error('Authentication failed!');
}

console.log(receivedPlaintext);