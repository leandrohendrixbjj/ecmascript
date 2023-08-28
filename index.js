console.clear()

const livros = [
    { id: '1', title: 'NodeJs' },
    { id: '2', title: 'PHP' }
]

livros.splice(0, 1)
console.log(livros);