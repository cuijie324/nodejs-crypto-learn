const crypto = require('crypto');

const cipher = crypto.createCipher('aes192', 'a password');

// let encrypted = '';
// cipher.on('readable', () => {
//     const data = cipher.read();
//     if (data) {
//         encrypted += data.toString('hex');
//         console.log('encrypted', encrypted);
//     }
// });

// cipher.on('end', () => {
//     console.log(encrypted);
// });

// cipher.write('some clear text data');
// cipher.end();

//第二种方式
let encrypted = cipher.update('some clear text data 哈哈', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipher('aes192', 'a password');
let text = decipher.update(encrypted, 'hex');
console.log('text', text);
text += decipher.final('utf8');
console.log(text);
