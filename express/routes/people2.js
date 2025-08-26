const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')

router.get('/', getPeople)

// can also test the below endpoint in Postman with data as JSON
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

// or

// router.route('/').get(getPeople).post(createPerson)
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router