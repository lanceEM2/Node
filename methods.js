const os = require('os')
const user = os.userInfo()

console.log(user)

console.log(`The sysytem uptime in seconds is ${os.uptime}`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    freeMem : os.freemem(),
}

console.log(currentOS)