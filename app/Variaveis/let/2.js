// Is not possible redecler a variable as let with as same name
console.clear()

let age = 30

try {
    let age = 30
} catch (error) {
    console.log(`Error:${error}`)
}

console.log(`Age: ${age}`)