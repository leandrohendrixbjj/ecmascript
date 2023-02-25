console.clear();
// Valida Fim: $ => Deve ser igual leandro

const regexp = /leandro/ig;

let text = "leandro";
console.log(`${text} : ${regexp.test(text)}`);

text = "leandroo";
console.log(`${text} : ${regexp.test(text)}`);


