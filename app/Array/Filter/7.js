// Retorna os numeros de um array com letras e numeros
const arr = ['Leandro', 12, 'soares'];

const nums = arr.filter((value, index, arr) => {
    return Number.isInteger(value) && value > 0;
});

console.log(nums);