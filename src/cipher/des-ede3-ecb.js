const crypto = require('crypto');

class Des3Ecb {
    constructor(key) {
        // this.alg = 'des-ede3';
        this.alg = 'des-ede3-ecb';
        this.iv = Buffer.alloc(0);//用不到iv
        this.key = this.build3DesKey(key);
    }

    cipher (plaintext) {
        let cipher = crypto.createCipheriv(this.alg, this.key, this.iv);
        let cipherd = cipher.update(plaintext, 'utf8', 'base64');
        return cipherd += cipher.final('base64');
    }

    decipher (cipherText) {
        let decipher = crypto.createDecipheriv(this.alg, this.key, this.iv);
        let decrypted = decipher.update(cipherText, 'base64', 'utf8');
        return decrypted += decipher.final('utf8');
    }

    build3DesKey (key) {
        //密钥长度24位，若传递的key超过，需要截取
        let keyLength = Buffer.byteLength(key);
        let length = keyLength > 24 ? 24 : keyLength;
        return Buffer.alloc(24).fill(key, 0, length);
    }
}

module.exports = Des3Ecb

//测试
let des = new Des3Ecb('cha123');
let enc = des.cipher('hello');
let str = des.decipher(enc);
console.log(enc, str);

