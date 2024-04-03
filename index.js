console.clear();

let arr = [5, 3, 2, 8, 0, 4, 10, 30, 20, 80, 2, 7, 100]

let binarySearch = (arr, target) => {

  let data = []
  let peek = []
  let indexPosition = Math.ceil(arr.length / 2 - 1)
  let valuePosition = arr[indexPosition]

  if (target == valuePosition) return true

  // On Left
  if (target <= valuePosition)
    data = arr.slice(0, indexPosition)

  // On Right
  if (target >= valuePosition)
    data = arr.slice(indexPosition, arr.length)

  // Primeira tantativa de achar o valor no array
  peek = data.filter(item => item == target)

  if (peek.length) return data

  // Usamos esse trecho de código, quando não temos um array ordenado
  if (!peek) {
    if (target >= valuePosition) {
      data = arr.slice(0, indexPosition)
    } else {
      data = arr.slice(indexPosition, arr.length)
    }
  }
  return data
}

const target = 2
const data = binarySearch(arr, target).find(item => item == target)

if (data) {
  console.log(`Achou o valor: ${target} na listagem`);
} else {
  console.log(`Valor: ${target} não consta no array`);
}

