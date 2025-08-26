const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', () => {
    console.log('Some other logic here')
})

customEmitter.on('response', (name, id) => {
    console.log(`Data received user ${name} with ID ${id}`)
})

customEmitter.emit('response', 'John', 30)