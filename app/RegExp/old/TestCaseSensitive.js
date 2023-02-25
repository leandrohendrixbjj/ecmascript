let nome = 'LeandrO';
let regExpm = /[a-z]/g;
let regExpM = /[A-Z]/g;
let regExpAll = /[a-z]/ig; // i -> Ignora Case Sensitive

console.log('minuscula =>', nome.match(regExpm));
console.log('MAIUSCULA =>', nome.match(regExpM));
console.log('Tudos =>', nome.match(regExpAll));