console.clear();
// Vefirica se todos os elementos do array passam pelo teste
// Implementado na função. Retorna um valor tipo boolean.
// Não motifica o array original

const arr = [1, 2, 3, 4];
const isLow = (value) => value < 5;

console.log(arr.every(isLow));


