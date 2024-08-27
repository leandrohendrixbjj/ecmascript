console.clear()

setTimeout(() => {
  console.log('Task')
}, 0)

Promise.resolve(true).then(() => {
  console.log('MicroTaskas')
})

queueMicrotask(() => {
  console.log('MicroTaskas')
})

console.log('Call Stack')
