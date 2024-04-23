console.clear()
// Usando quando a lista não é ordenada
let arr = [5, 3, 2, 8, 0, 4, 10, 30, 20, 80, 2, 7, 100]

let binarySearch = (arr, target) => {

  let data = []
  let peek = []
  let valueAtMiddleware = Math.ceil(arr.length / 2 - 1)
  let indexAtMiddleware = arr[valueAtMiddleware]

  if (target == indexAtMiddleware) return true

  // On Left
  if (target <= indexAtMiddleware)
    data = arr.slice(0, valueAtMiddleware)

  // On Right
  if (target >= indexAtMiddleware)
    data = arr.slice(valueAtMiddleware, arr.length)

  // Primeira tantativa de achar o valor no array
  peek = data.filter(item => item == target)

  if (peek.length) return data

  // Usamos esse trecho de código, quando não temos um array ordenado
  if (!peek) {
    if (target >= indexAtMiddleware) {
      data = arr.slice(0, valueAtMiddleware)
    } else {
      data = arr.slice(valueAtMiddleware, arr.length)
    }
  }
  return data
}

const target = 2
const data = binarySearch(arr, target).find(item => item == target)

if (data) {
  console.log(`Achou o valor: ${target} na listagem`)
} else {
  console.log(`Valor: ${target} não consta no array`)
}

