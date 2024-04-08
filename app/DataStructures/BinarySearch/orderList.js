// Busca binária em uma lista ordenada
console.clear()

const data = [11, 5, 4, 3, 2, 1].sort((a, b) => a - b)
const target = 5

let newData = []
const positionAtMiddleware = Math.ceil(data.length / 2 - 1)
const valueAtMiddleware = data[positionAtMiddleware]

if (target == valueAtMiddleware){
  console.log("Achou");
  process.exit()
}

// Right
if (target > valueAtMiddleware) {
  newData = data.slice(positionAtMiddleware, data.length)
}

// Left
if (target < valueAtMiddleware) {
  newData = data.slice(0, positionAtMiddleware)
}

// First try to find the value
const search = newData.filter(item => item == target)

console.log(
  (search.length) ? 'Achou' : 'Não achou'
);