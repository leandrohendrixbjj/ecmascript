console.clear()

/*
  Slice => Fatiar. Retorna um novo array, com dados selecionados.
  arrayIndex: Posição do elemento dentro do array
  valueIndex: Posição visual do elemento dentro do array */

const data = [10, 100, 20, 30, 1]

const arrayIndex = 2 // 20
const valueIndex = 4 // 30

const newData = data.slice(arrayIndex, valueIndex)

console.log(newData) // [20,30]
