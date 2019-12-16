const bcrypt = require('bcryptjs');

bcrypt.hash('bacon', 8, function(err, hash) {
    console.log(err, hash);
});