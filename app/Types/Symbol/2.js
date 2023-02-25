// Symbol cria um novo símbolo a cada vez que é chamado
console.clear();

const s1 = Symbol('papa');
const s2 = Symbol('papa');

console.log(s1 === s2);
