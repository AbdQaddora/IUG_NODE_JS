const { readFile, readFileSync } = require('fs');
const path = require('path');
// readFile run in async thread (libuv) but readFileSync run in sync thread (call stack);

// async
readFile(path.join(__dirname, 'data.txt'), 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("*".repeat(10) + " async " + "*".repeat(10))
    console.log(data)
})

// sync
const data = readFileSync(path.join(__dirname, 'data.txt'), 'utf-8');
console.log("*".repeat(10) + " sync " + "*".repeat(10))
console.log(data)