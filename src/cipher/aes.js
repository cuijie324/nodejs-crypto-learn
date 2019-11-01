const crypto = require('crypto');

//加密 aes192: 分组长度16字节，密钥长度24字节
const TEST_CASES = [
    {
        algo: 'aes192',
        key: Buffer.alloc(24).fill('hello'),
        iv: Buffer.alloc(16),
        plaintext: 'some clear text data 哈哈'
    },
    {
        algo: 'aes256',
        key: Buffer.alloc(32).fill('aes'),
        iv: Buffer.alloc(16),
        plaintext: 'hello aes256'
    }
]

function encrypt (test) {
    //加密
    let cipher = crypto.createCipheriv(test.algo, test.key, test.iv);
    
    let encrypted = cipher.update(test.plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log('encrypted', encrypted);

    //解密
    let decipher = crypto.createDecipheriv(test.algo, test.key, test.iv);
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    console.log('decrypted', decrypted);
}

encrypt(TEST_CASES[0]);
