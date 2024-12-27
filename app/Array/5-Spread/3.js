console.clear()

// Cria novas variáveis a partir de um array

const [,, data1, data2, ...data] = [1, 2, 3, 4, 5, 6]

console.log('data_1:', data1) // => 3
console.log('data_2:', data2) // => 4
console.log('data:', data) // => [5,6]
