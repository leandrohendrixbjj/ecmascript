console.clear();
// For define um registrador global que permite criar Symbols iguais

const s = Symbol.for('leandro');
const s1 = Symbol.for('leandro');

console.log(
    Symbol.keyFor(s) == Symbol.keyFor(s1));
