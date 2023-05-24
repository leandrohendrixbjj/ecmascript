console.clear();

//Comparando Objetos

const a = { name: "leandro" }
const A = { name: "leandro" }
const b = Object.create(a);
b.name = "leandro";
const aa = a;


console.log(`Result: ${a == A}`); // False
console.log(`Result: ${a == b}`); // False
console.log(`Result: ${a == aa}`); // True
