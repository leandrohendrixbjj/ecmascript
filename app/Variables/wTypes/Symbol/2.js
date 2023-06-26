// Cada Symbol é único.
console.clear();

const s1 = Symbol('papa');
const s2 = Symbol('papa');

console.log(s1 === s2); //false
