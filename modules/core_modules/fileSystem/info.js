const { open, stat } = require('fs');
const path = require('path');
// 1. stat: get info about the file
stat(path.join(__dirname, 'data.txt'), (err, info) => {
    if (err) {
        console.log(err);
        return
    }

    console.log(info)
})

//2. open: check if the file exists or not
open(path.join(__dirname, 'data.txt'), (err, path) => {
    if (err) {
        // if error the file not exists
        console.log(err)
        return;
    } else {
        // the file exists you can do whatever you want
        console.log(path)
    }
})
