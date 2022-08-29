// Return a new array.
// Don't chance current array.
// Select items of array
const names = ['leandro','soares','ribeiro','Ana'];
const indexArr = 1;
const numItemsToTake = 4;

const n = names.slice(indexArr,numItemsToTake);

console.log(n);