const { open, writeFile } = require("fs");
const path = require("path");

// *the second parameter is the open mode and 'a+' mean append
open(path.join(__dirname, 'data.txt'), 'a+', (error, fileDescriptor) => {
    if (error) {
        console.log(error)
        return
    }

    writeFile(fileDescriptor, "lorem lorem lorem lorem\n", (error) => {
        if (error) {
            console.log(error)
        }
    })
})

// *OR YOU CAN APPEND ON FILE LIKE THIS
writeFile(path.join(__dirname, 'data.txt'), "\nlorem lorem lorem lorem", { flag: 'a', encoding: "utf-8" }, (error) => {
    if (error) {
        console.log(error)
    }
})
