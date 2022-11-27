// Remove os itens duplicados
const arr = ['Leandro', 'Leandro', 'soares'];

const nomes = arr.filter((value, index, arr) => {
    return arr.indexOf(value) == index;
});

console.log(nomes);

