const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

function hash(alg){
    const file = path.join(__dirname, '../../', 'package.json');
    const date1 = new Date();
    const fileStream = fs.createReadStream(file);
    const hashAlg = crypto.createHash(alg);

    fileStream.on('data', buf => {
        hashAlg.update(buf);
    });

    fileStream.on('end',() => {
        let date2 = new Date();
        let result = hashAlg.digest('hex');
        console.log(alg, date2 - date1, result)
    });
}

function doHash(algs){
    algs.forEach((alg) => {
        hash(alg);
    });
}

var algs = crypto.getHashes();
doHash(algs);