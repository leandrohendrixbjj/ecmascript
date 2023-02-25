console.clear();

// Lista: [] => Valida os caracteres q estão na lista.Tudo dentro da lista é um caracter
let regexp = new RegExp(/^[ordnael.?]/);

let text = 'leandro';
console.log(`${text} : ${regexp.test(text)}`);

text = 'leandro.';
console.log(`${text} : ${regexp.test(text)}`);

text = 'leandro?';
console.log(`${text} : ${regexp.test(text)}`);

