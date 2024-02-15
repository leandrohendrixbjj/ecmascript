console.clear();
// Vefirica se todos os elementos do array passam pelo teste
// Implementado na função. Retorna um valor tipo boolean.
// Não motifica o array original

const arr = [1, 2, 3, 4];

function isLow(value) {
  return value < 10
}

console.log(arr.every(isLow));


