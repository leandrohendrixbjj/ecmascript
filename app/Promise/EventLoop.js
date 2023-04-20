console.clear();

// Tasks
setTimeout(() => {
    console.log("Tasks");
}, 500)

// MicroTask
Promise.resolve(true).then(() => {
    console.log("MicroTask");
})

// callStack
for (let row = 1; row < 3; row++) {
    console.log("CallStack");
}