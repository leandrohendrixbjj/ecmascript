console.clear()

// Converte valores tipo int para Binário
const $intToBinary = ($value) => {
  return ($value >>> 0).toString(2)
}

const data = $intToBinary(10)

console.log(`Value: ${data}`)
console.log(`Type: ${typeof (data)}`)
