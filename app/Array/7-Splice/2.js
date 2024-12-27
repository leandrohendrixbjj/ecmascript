console.clear()

/*
   Splice => Emendar => altera o conteúdo de uma lista.
   Permite add ou remover elementos de uma lista
*/

const data = [0, 2, 5]

const position = 2
const action = 1 // Remove:1 | Add: 0

data.splice(position, action)

console.log(data) // [0,2]
