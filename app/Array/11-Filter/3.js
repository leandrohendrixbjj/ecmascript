console.clear()

// Utilizando filter com funções externas

function isBigThan (value) {
  return value > 10
}

const filter = [1, 12, 10, 23].filter(isBigThan)

console.log(filter)
