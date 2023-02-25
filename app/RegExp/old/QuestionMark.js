
// Neste caso informamos que o valor anterior a ? é opcional
let amarican = 'color';
let british = 'colour';
let ran = /colou?r/;

console.log(ran.test(amarican));
console.log(ran.test(british));
