const http = require("http");


// Create a local server to receive data from
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("hello world");
        res.end();
    }
    if (req.url === '/api/cources') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();

    }
});

server.listen(3000);

console.log("Listening on port 3000...");
