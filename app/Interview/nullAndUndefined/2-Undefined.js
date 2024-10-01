console.clear()

/* Undefined => Variáveis que não possuem valor o JS as determina como undefined.
   Em uma operação matemática com undefined o resultado será NaN.
   Em uma concatenação undefined vira uma string
*/

let age
const name = 'leandro'
const text = `${name} sua idade é ${age}`

console.log(`Minha iadade é ${age + 3}`)
console.log(text, typeof (text))
