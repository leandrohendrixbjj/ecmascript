console.clear()

/* Null => valor aplicado pelo programador quando a variável não possui valor inicial
   Em uma operação matemática null será considerado como 0.
   Em uma concatenação null vira uma string
*/

const age = null
const name = 'leandro'
const text = `${name} sua idade é ${age}`

console.log(`Minha iadade é ${age + 3}`)

console.log(text, typeof (text))
