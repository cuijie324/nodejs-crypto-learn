const crypto = require('crypto');
const _ = require('lodash');

let ciphers = crypto.getCiphers();
console.log(_.filter(ciphers, t => t.indexOf('aes') > -1));

//所有AES算法
let aes = ['aes-128-cbc', 'aes-128-cbc-hmac-sha1', 'aes-128-cbc-hmac-sha256', 'aes-128-ccm',
    'aes-128-cfb', 'aes-128-cfb1', 'aes-128-cfb8', 'aes-128-ctr', 'aes-128-ecb', 'aes-128-gcm',
    'aes-128-ofb', 'aes-128-xts',
    'aes-192-cbc', 'aes-192-ccm', 'aes-192-cfb', 'aes-192-cfb1',
    'aes-192-cfb8', 'aes-192-ctr', 'aes-192-ecb', 'aes-192-gcm', 'aes-192-ofb',
    'aes-256-cbc', 'aes-256-cbc-hmac-sha1', 'aes-256-cbc-hmac-sha256', 'aes-256-ccm', 'aes-256-cfb',
    'aes-256-cfb1', 'aes-256-cfb8', 'aes-256-ctr', 'aes-256-ecb', 'aes-256-gcm', 'aes-256-ofb',
    'aes-256-xts',
    'aes128', 'aes192', 'aes256',
    'id-aes128-CCM', 'id-aes128-GCM', 'id-aes128-wrap', 'id-aes192-CCM',
    'id-aes192-GCM', 'id-aes192-wrap', 'id-aes256-CCM', 'id-aes256-GCM', 'id-aes256-wrap'
]

let des = [
    'des', 'des-cbc', 'des-cfb', 'des-cfb1', 'des-cfb8', 'des-ecb', 'des-ede', 'des-ofb',
    'des-ede-cbc', 'des-ede-cfb', 'des-ede-ofb',
    'des-ede3', 'des-ede3-cbc', 'des-ede3-cfb', 'des-ede3-cfb1', 'des-ede3-cfb8', 'des-ede3-ofb',
    'des3', 'desx', 'desx-cbc',
]
