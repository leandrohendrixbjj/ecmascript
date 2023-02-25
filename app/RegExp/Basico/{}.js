console.clear();
// Chaves: {} => Limita o número de caracteres

let regexp = /[gimba]{2,3}/ig;

let text = 'g';
console.log(`${text} : ${regexp.test(text)}`);

text = 'gim';
console.log(`${text} : ${regexp.test(text)}`);

text = 'gimb';
console.log(`${text} : ${regexp.test(text)}`);



