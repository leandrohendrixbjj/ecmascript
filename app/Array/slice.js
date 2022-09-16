// Return a new array.
// Don't chance current array.
// Select items of array
const names = ['leandro', 'soares', 'ribeiro', 'Ana'];
const indexArr = 1;
const until = 4; // posições a partir do indexArr selecionado

const n = names.slice(indexArr, numItemsToTake);

console.log(n);