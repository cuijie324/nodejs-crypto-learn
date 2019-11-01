const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'a secret');

// hmac.on('readable', () => {
//     const data = hmac.read();
//     if (data) {
//         console.log(data.toString('hex'));
//     }
// });

// hmac.on('end', () => {
//     console.log(`it's end`);
// });

// hmac.write('some data to hash');
// hmac.end();

hmac.update('some data to hash');
console.log(hmac.digest('hex'));
