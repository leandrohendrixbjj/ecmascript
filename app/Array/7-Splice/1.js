console.clear()

/*
   Splice => Emendar => altera o conteúdo de uma lista.
   Permite add ou remover elementos de uma lista
*/

const data = [0, 2, 5]

const position = 1
const action = 0 // Add: 0 | Remove:1
const value = 1

data.splice(position, action, value)

console.log(data) // [0,1,2,5]
