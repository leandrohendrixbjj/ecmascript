console.clear();
// Soma de valores de um objeto de um array
// Quando se usa objetos é importante passar a variavel valor inicial
const inicialValue = 0;
const obj = [
    { val: 1 }, { val: 2 },
    { val: 3 }, { val: 4 }
].reduce((accumulate, actualValue, index, arr) => {
    return accumulate + actualValue.val;
}, inicialValue);

console.log(obj);

