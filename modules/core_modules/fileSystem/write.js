const { open, writeFile } = require("fs");

// the second parameter is the open mode and 'a+' mean append
open('./data.txt', 'a+', (error, fileDescriptor) => {
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