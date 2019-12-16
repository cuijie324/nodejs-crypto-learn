const forge = require('node-forge');
var key = forge.random.getBytesSync(16);
var iv = forge.random.getBytesSync(16);

// key = "cha123";
let str = "hello";

var cipher = forge.cipher.createCipher('3DES-ECB', key);
cipher.start({iv: iv});
cipher.update(forge.util.createBuffer(str));
cipher.finish();
var encrypted = cipher.output;
// outputs encrypted hex
console.log(encrypted.toHex());