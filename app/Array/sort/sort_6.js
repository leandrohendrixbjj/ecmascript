// Neste modelo se for incluso numero 10
// Ordenação não funciona dentro do padrão unicode
// Veja o exemplo sort_7
let values = [];
let regexp = /[\d]/g;
values.push('x' + 10);
values.push(3 + 'c');
values.push(2 + 'b');
values.push(5 + 'a');

function order(a, b) {
  if (a.match(regexp) > b.match(regexp)) return 1;
  if (a.match(regexp) < b.match(regexp)) return -1;
  return 0;
}

console.log(values.sort(order));
