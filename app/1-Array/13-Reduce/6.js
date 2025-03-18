console.clear()

// Juntando arrays contidos num Objeto

const info = [
  {
    name: 'Leandro',
    books: ['Bible', 'Harry Potter'],
    age: 40
  },
  {
    name: 'Soares',
    books: ['The Lord of the Rings', 'The Shining', 'Better Call Saul'],
    age: 50
  }
]

const data = info.reduce((acculumate, node) => {
  return [...acculumate, ...node.books]
},
[]).sort((a, b) => {
  return (a > b) ? 1 : (a < b) ? -1 : 0
})
console.log(data)
