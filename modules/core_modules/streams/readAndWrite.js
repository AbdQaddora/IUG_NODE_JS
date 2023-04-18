const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream('./input.txt');
const writeStream = createWriteStream('./output.txt');

readStream.pipe(writeStream);

