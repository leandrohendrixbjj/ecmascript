console.clear();
// Lista: [] => Valida os caracteres q estão na lista.Tudo dentro da lista é um caracter
let regexp = /^[ordnael.?]/ig;
let text = 'leandro';
console.log(`${text} : ${regexp.test(text)}`);

let regexp_1 = /^[ordnael.?]/ig;
text = 'leandro.';
console.log(`${text} : ${regexp_1.test(text)}`);

let regexp_2 = /^[ordnael.?]/ig;
text = 'leandro?';
console.log(`${text} : ${regexp_2.test(text)}`);

