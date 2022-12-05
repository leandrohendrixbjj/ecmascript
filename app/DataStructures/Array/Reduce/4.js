console.clear();
//Redução de um array de arrays
let initialValue = 0;
const arr = [
    [0, 1], [2, 3], [4, 5]
].reduce((accumulate, actualValue, index, arr) => accumulate.concat(actualValue));

console.log(arr);

