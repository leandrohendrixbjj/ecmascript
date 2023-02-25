console.clear();
// Valida inicio: ^ => Deve iniciar com um número entre 1 e 3
const regexp = /^[1-3]leandro/i;

let text = "1leandro";
console.log(`${text} : ${regexp.test(text)}`);

text = "leonardo";
console.log(`${text} : ${regexp.test(text)}`);

text = "4leonardo";
console.log(`${text} : ${regexp.test(text)}`);
