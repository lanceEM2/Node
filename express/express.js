// compare to app.js

const express = require('express')
const path = require('path')

const app = express()

// setup for static files
app.use(express.static('./public'))

// the index.html also treated as a static file
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './public/index.html'))
// })

app.use((req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5000, () => {
    console.log('Server listening to port 5000...')
})