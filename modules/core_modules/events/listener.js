const http = require('http');

const server = http.createServer();

// EVENT LISTENER
// "listening" is the event name
// the callback function will be executed automatically  when the event occurs
server.on("listening", () => {
    console.log("server is listening now")
})

server.listen(3000)