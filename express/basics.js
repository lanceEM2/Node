const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Home page resource hit')
    res.status(200).send('Welcome to Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('Welcome to About Page')
})

app.all('(.*)', (req, res) => {
    res.status(400).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening to port 5000...')
})