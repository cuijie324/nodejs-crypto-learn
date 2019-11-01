const crypto = require('crypto');
const assert = require('crypto');

let test = {
    algo: 'aes-192-ccm',
    key: '1ed2233fa2223ef5d7df08546049406c7305220bca40d4c9',
    iv: '0e1791e9db3bd21a9122c416',
    plain: 'Hello node.js world!',
    password: 'very bad password',
    aad: '63616c76696e',
    ct: '49d2c2bd4892703af2f25db04cbe00e703d6d5ac',
    tag: '693c21ce212564fc3a6e',
    tampered: true
};

const isCCM = /^aes-(128|192|256)-ccm$/.test(test.algo);
console.log('>>>>>>', isCCM);

let options;
if (isCCM)
    options = { authTagLength: test.tag.length / 2 };

const inputEncoding = test.plainIsHex ? 'hex' : 'ascii';

let aadOptions;
if (isCCM) {
    aadOptions = {
        plaintextLength: Buffer.from(test.plain, inputEncoding).length
    };
}

console.log(options, aadOptions);

{
    const encrypt = crypto.createCipheriv(test.algo,
        Buffer.from(test.key, 'hex'),
        Buffer.from(test.iv, 'hex'),
        options);

    if (test.aad)
        encrypt.setAAD(Buffer.from(test.aad, 'hex'), aadOptions);

    let hex = encrypt.update(test.plain, inputEncoding, 'hex');
    hex += encrypt.final('hex');

    const auth_tag = encrypt.getAuthTag();

    console.log(hex, auth_tag.toString());

    // only test basic encryption run if output is marked as tampered.
    if (!test.tampered) {
        assert.strictEqual(hex, test.ct);
        assert.strictEqual(auth_tag.toString('hex'), test.tag);
    }
}

