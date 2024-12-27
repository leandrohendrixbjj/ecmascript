//Os valores não são impressos na ordem correta
var lista = [10, 1, 5, 9, 8, 12, 15];

function orderBy(a, b) {
   return (a > b) ? 1 : (a < b) ? -1 : 0
}

lista.sort(orderBY);

console.log(lista);