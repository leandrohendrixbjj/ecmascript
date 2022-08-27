//Quantifier * -> zero ou uma vez
//Quantifier + -> uma ou mais vez

const adress = 'Leandro,11de';
let regExp = /\d{2}\s*[a-z]{2}/g;
let regExp2 = /\d{2}\s+[a-z]{2}/g;

console.log('*->', adress.match(regExp));

console.log('+->', adress.match(regExp2));



