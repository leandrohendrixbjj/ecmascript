console.clear();
// Retorna um único valor de retorno.
const arr = [1, 2, 3];
const initialValue = 0;

const sum = arr.reduce((accumulate, value) => {
    return accumulate + value;
}, initialValue);

console.log(sum);
