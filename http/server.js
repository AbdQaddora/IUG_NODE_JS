const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.end("HOME PAGE");
            break;
        case "/admin":
            res.end("ADMIN PAGE");
            break;
        case "/user":
            res.end("USER PAGE");
            break;

        default:
            res.end("PAGE NOT FOUND 404");
            break;
    }
})

server.listen(PORT, () => {
    console.log(`server is listening on port = ${PORT}`);
})