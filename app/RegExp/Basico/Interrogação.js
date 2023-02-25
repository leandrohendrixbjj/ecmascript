console.clear();
// Valida fim através: ? => Pode ter UM ou caracter no final 
const regexp = /leandro?./i;

let text = "leandroa";
console.log(`${text} : ${regexp.test(text)}`);

text = "leandro";
console.log(`${text} : ${regexp.test(text)}`);
