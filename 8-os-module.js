// OS modules - Interact with the Operating and Server
const os = require('os')

// Info about current user
const user = os.userInfo()
// console.log(user)

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: (os.totalmem())/1000000000,
    freeMem: os.freemem()/1000000000,
}

console.log(currentOs)