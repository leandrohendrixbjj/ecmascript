console.clear()

// Retorna um valor único ou reduz para um array, string, integer..
const data = [1, 2, 3]
const lastValueToInteration = 0

const sum = data.reduce((accumulate, value) => {
  return accumulate + value
}, lastValueToInteration)

console.log(`Soma: ${sum}`)
