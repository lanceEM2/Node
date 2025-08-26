const express = require('express')
const app = express()
const logger = require('./logger') // imported file from logger.js

// req => middleware => response

app.get('/', logger, (req, res) => {
    res.send('Home Page')
})

app.get('/about', logger, (req, res) => {
    res.send('About Page')
})

app.listen(5000, () => {
    console.log("Server listening on port 5000...")
})

// go to use.js afterwards