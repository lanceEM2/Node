const express = require('express')
const router =- express.Router()

router.post('/', (req, res) => { // gets the data from the with form action /login
    const { name } = req.body // gets data from parsed form data from index.html, the name attribute especially
    if (name) {
        return res.status(201).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

module.exports = router