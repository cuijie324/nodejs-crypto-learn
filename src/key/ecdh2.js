const { ECDH } = require('crypto');
console.log(ECDH.convertKey);

const ecdh = ECDH('secp256k1');
ecdh.generateKeys();
const compressedKey = ecdh.getPublicKey('hex', 'compressed');

const uncompressedKey = ECDH.convertKey(compressedKey, 'secp256k1', 'hex', 'hex', 'uncompressed');
console.log(uncompressedKey === ecdh.getPublicKey('hex'));
