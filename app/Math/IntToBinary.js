console.clear()

// Converte valores tipo int para Binário

function intToBinary (num) {
  return (num >>> 0).toString(2)
}

const result = intToBinary(2)

console.log(result) // 101
console.log(typeof result) // String
