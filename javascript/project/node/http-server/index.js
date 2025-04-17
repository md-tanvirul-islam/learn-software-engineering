const http = require('node:http');

const PORT = 3000;

// Request listener: The requestListener function is the function that is executed each time the server gets a request.
// Here, both request and response object are streams.
// req is a readable stream, which we can listen to for data coming in through that stream by using the dot on function.
// res is writeable stream.

// const server = http.createServer();
// server.on('request', (req, res) => { });

//short approach
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello Sir! How are you?');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.....`);
});