console.clear();
// Valida fim através: + => Deve ter UM ou mais caracteres 
const regexp = /leandro.+/i;

let text = "leandroaaaaaaaa";
console.log(`${text} : ${regexp.test(text)}`);

text = "leandro11111111";
console.log(`${text} : ${regexp.test(text)}`);

text = "leandro";
console.log(`${text} : ${regexp.test(text)}`);
