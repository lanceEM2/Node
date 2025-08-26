// fetching input data from a javascript file (Frontend)

const express = require('express')
const app = express()
let { people } = require('./data')

app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json data type
app.use(express.json())

app.post('/login', (req, res) => { // gets the data from the with form action /login
    const { name } = req.body // gets data from parsed form data from index.html, the name attribute especially
    if (name) {
        return res.status(201).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people})
})

// can also test the below endpoint in Postman with data as JSON
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({
            success: false,
            msg: 'Please provide name value'
        })
    }
    res.status(201).json({
        success: true,
        person: name
    })
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with id ${id}`
        })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({
        success: true,
        data: newPeople
    })
})

app.delete('/api/people:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `No person with id ${req.params.id}`
        })
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({
        success: true,
        data: newPeople
    })
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})

// afterwards, look at router and people.js