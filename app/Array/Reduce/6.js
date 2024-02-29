//Juntando arrays contidos num Objeto
console.clear()

const data = [
  {
    name: 'Leandro',
    books: ['Bible', 'Harry Potter'],
    age: 40
  },
  {
    name: 'Soares',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 50
  },
]

const books = data.reduce((element, node) => {
  return [...element, ...node.books]
}, ['First Book'])

console.log(books);

