console.clear();
// Grupo: [] => Valida os caracteres dentro do grupo

let regexp = /(movida|gimba)/ig;

let text = 'movida';
console.log(`${text} : ${regexp.test(text)}`);

let regexp_1 = /(movida|gimba)/ig;
text = 'gimba';
console.log(`${text} : ${regexp_1.test(text)}`);

let regexp_2 = /(movida|gimba)/ig;
text = 'totvs';
console.log(`${text} : ${regexp_2.test(text)}`);


