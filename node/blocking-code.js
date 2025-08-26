const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        // 🚨 Blocking code: simulate heavy computation
        for (let i = 0; i < 1000; i++) {
            // just looping for no reason
            console.log(`${i}`)
        }
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history')
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
        `)
    }
})

server.listen(5000, () => {
    console.log('Server listening on port 5000...')
})

// You’ll notice it doesn’t respond immediately — it waits until the blocking code in the / request finishes.
// happens on all the urls until the blocking code executes first and happens because Node.js is synchronous automatically.
