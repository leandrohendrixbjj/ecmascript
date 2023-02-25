// equal [^0-9]
const str = 'Leandro 23_!';
const regexp = /\D/g;

console.log(str.match(regexp));