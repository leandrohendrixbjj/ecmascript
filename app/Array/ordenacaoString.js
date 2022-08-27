// Ordenar considerando apenas os números em um array de numeros e letras
let values = [];
let regexp = /[\D]/g;
values.push('x' + 12);
values.push(10 + 'l');
values.push(2 + 'f');
values.push(1 + 'b');


values.sort( (a,b) => {
  return a.replace(regexp, '') - b.replace(regexp, '');
});

console.log(values);

