/*
  Referência: passamos o endereço de memória do items para a função.
  Usando um objeto para validar a passagem por referência
 */

console.clear()

const data = { age: 30 }

function sum (data) {
  data.age += 2
  console.log('INSIDE FUNCTION => ', data) // 32
}

sum(data)
console.log('OUTSIDE FUNCTION => ', data) // 32
