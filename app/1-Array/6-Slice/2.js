console.clear()

const arr = ['leandro', 'soares', 'ribeiro', 'karina']

console.log(arr.slice(0)) // [ 'leandro', 'soares', 'ribeiro', 'karina' ]

console.log(arr.slice(0, 1)) // [ 'leandro']

console.log(arr.slice(0, 2)) // [ 'leandro', 'soares' ]

console.log(arr.slice(0, 20)) // Todos

console.log(arr.slice(1, 4)) // [ 'soares', 'ribeiro', 'karina' ]

console.log(arr.slice(-1)) // [ 'karina' ]

console.log(arr.slice(-2)) // [ 'ribeiro', 'karina' ]

console.log(arr.slice(-10)) // [ 'leandro', 'soares', 'ribeiro', 'karina' ]

console.log(arr.slice()) // [ 'leandro', 'soares', 'ribeiro', 'karina' ]
