// Quanto for necessário criar um identifcador único dentro do JS, podemos usar o Symbol
// Symbol retorna um objeto que possui um identificador único.
// Não podemos usar Symbol no DOM. Pq ele não retorna uma string. Sim um identificador interno.
console.clear();

const sym1 = Symbol();

console.log(typeof sym1);
