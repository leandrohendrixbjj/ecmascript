console.clear();

//Comparando Objetos

const person = { name: 'Leandro' };
const pessoa = { name: 'leandro' };
const persona = person;

let result = person === pessoa;
console.log(`First: ${result}`);

result = person === persona;
console.log(`Second: ${result}`);