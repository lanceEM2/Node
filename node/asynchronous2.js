// asynchronous because timers are treated asynchronously.

console.log('first task')
setTimeout(() => {
    console.log('second task')
}, 0)

console.log('next task')