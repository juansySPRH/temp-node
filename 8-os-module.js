const os = require('os')

const user = os.userInfo()
console.log(user)

/* setInterval(() => {
    console.log(`The System Uptime is ${os.uptime()} seconds`)
}, 1000) */

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    
}
console.log(currentOS)