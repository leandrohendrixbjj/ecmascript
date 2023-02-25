console.clear();
// Valida fim através: . => Deve ter APENAS UM caracter no final ou inicio
const regexp = /leandro./i;

let text = "leandroA";
console.log(`${text} : ${regexp.test(text)}`);

text = "leandro1";
console.log(`${text} : ${regexp.test(text)}`);

text = "leandro";
console.log(`${text} : ${regexp.test(text)}`);
