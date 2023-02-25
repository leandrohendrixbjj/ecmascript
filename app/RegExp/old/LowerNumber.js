// {4} -> Indica que a letra a deve se repetir no máximo 4x
// {4,} -> Indica que a letra a deve se repetir mais que máximo 4x

let str = 'Leaaaaandro';
let max = /Lea{4}ndro/g;
let moreThan = /Lea{4,}ndro/g;

console.log(max.test(str));
console.log(moreThan.test(str));