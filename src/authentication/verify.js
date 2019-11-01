const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'SHA256';
let text = 'some data to sign';

function createSign (algorithm, text) {
    const sign = crypto.createSign(algorithm);
    const privateKey = fs.readFileSync('./private.pem').toString();
    console.log(privateKey);
    sign.update(text);
    return sign.sign(privateKey, 'hex');
}

function verify (algorithm, text, signature) {
    const verify = crypto.createVerify(algorithm);
    const publicKey = fs.readFileSync('./public.pem').toString();
    verify.update(text);
    return verify.verify(publicKey, signature, 'hex');
}

function verifyStream (algorithm, text, signature) {
    const verify = crypto.createVerify(algorithm);
    const publicKey = fs.readFileSync('./public.pem').toString();

    verify.write(text);
    verify.end();

    return verify.verify(publicKey, signature, 'hex');
}

let signature = createSign(algorithm, text);
let result = verify(algorithm, text, signature);
console.log(result);
