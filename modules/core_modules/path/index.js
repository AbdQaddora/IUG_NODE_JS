const path = require("path");

console.log(`DIR NAME: ${path.dirname(__filename)}`)
console.log(`BASE (FILE) NAME: ${path.basename(__filename)}`)
console.log(`EXTENSION NAME: ${path.extname(__filename)}`)
console.log(`JOIN ('home' , 'data' , 'text.txt') :`, path.join('home' , 'data' , 'text.txt'));