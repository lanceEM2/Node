const express = require('express')
const app = express()
const logger = require('./logger') // imported file from logger.js
const authorize = require('./authorize') // imported file from authorize.js

app.use([logger, authorize]) // prevents typing logger and authorize in every route
// app.use('/api', logger) => adds logger in all api routes

// req => middleware => response

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(5000, () => {
    console.log("Server listening on port 5000...")
})