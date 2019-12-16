var iconv = require('iconv-lite');

// Convert from an encoded buffer to js string.
let str = iconv.decode(Buffer.from([0xc4, 0xe3, 0xba, 0xc3]), 'gbk');
console.log('str', str);

// Convert from js string to an encoded buffer.
let buf = iconv.encode("你好", 'gbk');
console.log('buf', buf);

// Check if encoding is supported
console.log(iconv.encodingExists("us-ascii"));
