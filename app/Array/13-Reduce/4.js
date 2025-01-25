console.clear()

// Redução de um array de arrays

const info = [
  [0, 1], [5, 6], [3, 4]
]

const data = info.reduce((accumulate, element) => accumulate.concat(element))
  .sort((a, b) => a - b)

console.log(data)
