let crypto = require('crypto');
let CryptoJS = require('crypto-js');
let algo = 'aes-256-cbc';

let cipher_key = 'U2FsdGVkX19UDS+OHfzpmedFHdV301AG5DSD8j9o6VWLoa179aEKDuhE/uRs2JWiYou';
let plainText = 'c667a855d02f264fa04cd37af0a14897';
let encrypted = 'fe20d9dbc42691158b2cd1f7267c8dc85d99945197a611cbe6931210b29896d440f0b963ad879c856ac6b5e66a91b1c4';

//加密
function _cipher (algorithm, key, text) {
    let cip = crypto.createCipher(algorithm, key);
    let encrypted = cip.update(text, 'utf8', 'hex');
    encrypted += cip.final('hex');
    return encrypted;
}

//解密
function _decipher (algorithm, key, encrypted) {
    let decipher = crypto.createDecipher(algorithm, key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// console.log(_decipher(algo, cipher_key, encrypted));
// console.log(_cipher(algo, cipher_key, plainText));

//todo: 加密不出来
const aesEncrypt = (data, key, iv) => {
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    console.log(data, key, iv);

    /**
     * CipherOption, 加密的一些选项:
     *   mode: 加密模式, 可取值(CBC, CFB, CTR, CTRGladman, OFB, ECB), 都在 CryptoJS.mode 对象下
     *   padding: 填充方式, 可取值(Pkcs7, AnsiX923, Iso10126, Iso97971, ZeroPadding, NoPadding), 都在 CryptoJS.pad 对象下
     *   iv: 偏移量, mode === ECB 时, 不需要 iv
     * 返回的是一个加密对象
     */
    const cipher = CryptoJS.AES.encrypt(data, key, {
        algo: algo,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.NoPadding,
        iv: iv,
    });
    // 将加密后的数据转换成 Base64
    return cipher.ciphertext.toString();
}

console.log('>>>', aesEncrypt(plainText, cipher_key, cipher_key));
