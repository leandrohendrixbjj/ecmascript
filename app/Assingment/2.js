console.clear()

const person = { nome: 'Leandro', idade: 33 };

const { nome: aliasNome, idade: aliasIdade } = person;

console.log(`nome: ${aliasNome}`);
console.log(`idade: ${aliasIdade}`);