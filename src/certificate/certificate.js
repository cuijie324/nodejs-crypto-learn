const crypto = require('crypto');
const fs = require('fs');
const spkac = fs.readFileSync('./spkac2.cnf');

// const cert = crypto.Certificate();
const cert = new crypto.Certificate();
let challenge = cert.exportChallenge(spkac);
console.log(challenge.toString('utf8'));

const publicKey = cert.exportPublicKey(spkac);
console.log(publicKey);

console.log(cert.verifySpkac(spkac));
