console.clear()

/*
  Os valores não são impressos na ordem,
  pq sort considera a tabela Unicode para ordenação.
  Unicode tem valores de 0 até 9
*/

const lista = [10, 1, 5, 9, 8, 12, 15]

lista.sort()

console.log(lista)
