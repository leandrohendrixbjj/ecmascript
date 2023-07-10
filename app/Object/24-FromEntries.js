console.clear();

//Converte um array Bidimencional em Objeto
const arr = [['nome', 'leandro'], ['age', 30]];
const person = Object.fromEntries(arr);

console.log(person);