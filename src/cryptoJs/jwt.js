//手动生成jwt
var CryptoJS = require('crypto-js');
let header = {
    "alg": "HS256",
    "typ": "JWT"
};

let payload = {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}

let secret = 'your-256-bit-secret';
// HMAC SHA256 algorithm

//   HMACSHA256(
//     base64UrlEncode(header) + "." +
//     base64UrlEncode(payload),
//     secret)

//base64编码
let base64 = str => Buffer.from(str).toString('base64');
let base64UrlSafe = str => str.replace(/=/g, '').replace(/\+/g, '-').replace(/\//, '_');
let base64UrlEncode = str => base64UrlSafe(base64(str));

/**
 * 生成jwt数据
 * 数据需要使用base64UrlEncode编码
 */
function generateJwt (header, payload, secret) {
    let part1 = base64UrlEncode(JSON.stringify(header));
    let part2 = base64UrlEncode(JSON.stringify(payload));

    let str = part1 + '.' + part2;
    var hash = CryptoJS.HmacSHA256(str, secret);
    var part3 = CryptoJS.enc.Base64.stringify(hash);
    part3 = base64UrlSafe(part3);

    return `${part1}.${part2}.${part3}`;
}

console.log(generateJwt(header, payload, secret));
