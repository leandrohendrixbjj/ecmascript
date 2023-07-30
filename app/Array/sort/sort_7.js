// Ordenar CONSIDERANDO APENAS OS NÚMEROS em um array de numeros e letras
console.clear()
let values = [];

// D => Only numbers   
// d => Only letters
let regexp = /[\D]/g;

values.push('d10');
values.push('c3');
values.push('2b');
values.push('1a');

values.sort((a, b) => {
    // 1 e -1 => ASC OU -1 e 1 => DESC
    if (a > b) return 1
    if (a < b) return -1
    return 0
}).map((element) => {
    // Permite retornar elementos dentro do padrão unicode
    return element
})
console.log(values);