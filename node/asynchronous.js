const { readFile } = require('fs')

console.log("Start")

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

console.log("End")