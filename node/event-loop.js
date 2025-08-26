// This code is an event-loop example because the server 
// continuously listens for “request” events and processes them through callbacks, 
// without blocking the main thread.

// listen in (server.listen) tells Node to start an event loop, watching port 5000 for new connections.

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000...')
})