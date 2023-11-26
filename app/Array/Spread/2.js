// Add um novo element no final de um array
console.clear()

const nomes = ['leandro', 'soares'];
const lastName = ['ribeiro'];

//Add Ribeiro no obj nomes
nomes.push(...lastName);

console.log('FullName', nomes);