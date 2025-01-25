console.clear()

/*
  Soma de valores de um objeto de um array
  Quando se usa objetos é importante passar a variavel valor inicial
*/

const startWith = 0

const data = [
  { item: 'Laranja', preco: 10 },
  { item: 'Banana', preco: 5 },
  { item: 'Abacate', preco: 20 }

].reduce((accumulate, element) => (accumulate += element.preco), startWith)

console.log(data)
