console.clear();
// Valida Maiúsculo e Minúsculo, através do i
const regexp = /leandro/i;

let text = "Leandro";
console.log(regexp.test(text));

text = "LEANDRO";
console.log(regexp.test(text));
