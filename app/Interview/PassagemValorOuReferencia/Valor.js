/*
  Passagem Por Valor: uma CÓPIA do item e passada para a função.
  Essa cópia possui um novo endereço de memória.
 */

console.clear()

const data = 30

function sum (data) {
  data += 2
  console.log('INSIDE FUNCTION => ', data) // 32
}

sum(data)
console.log('OUTSIDE FUNCTION => ', data) // 30
