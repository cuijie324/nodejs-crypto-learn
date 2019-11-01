const crypto = require('crypto');
const assert = require('assert');

//生成alice的key
const alice = crypto.createECDH('secp521r1');
const aliceKey = alice.generateKeys();

//生成bob的key
const bob = crypto.createECDH('secp521r1');
const bobKey = bob.generateKeys();

//交换和生成共享密钥
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

console.log(aliceSecret.toString('hex'), bobSecret.toString('hex'));
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
