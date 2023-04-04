const { pbkdf2 } = require('crypto');

const START_TIME = Date.now();

const hash = () => {
    pbkdf2("password", "##", 10_000, 1000, "sha256", () => {
        console.log(Date.now() - START_TIME)
    })
}

hash();
hash();
hash();
hash();

hash();
hash();
hash();
hash();