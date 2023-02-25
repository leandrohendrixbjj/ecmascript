console.clear();
// Grupo: [] => Valida os caracteres dentro do grupo

let regexp = new RegExp(('movida|gimba'));

let text = 'movida';
console.log(`${text} : ${regexp.test(text)}`);

text = 'gimba';
console.log(`${text} : ${regexp.test(text)}`);

text = 'totvs';
console.log(`${text} : ${regexp.test(text)}`);


