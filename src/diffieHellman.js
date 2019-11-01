const crypto = require('crypto');
const assert = require('assert');

const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

//计算出共享密钥
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

console.log(aliceSecret.toString('hex'), bobSecret.toString('hex'));
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
