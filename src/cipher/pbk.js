const crypto = require('crypto');

// crypto.pbkdf2('secret', 'salt', 10000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));
// });

let key = crypto.pbkdf2Sync('secret', 'salt', 10000, 64, 'sha512');
console.log(key.toString('hex'));
