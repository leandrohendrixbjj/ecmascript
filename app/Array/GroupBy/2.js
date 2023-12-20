
// groupBy with Map=> Agrupa os registros de um array 
// Necessário instalar o pacote: npm i core-js ( Não é um comando nativo do nodeJs )

console.clear()
const groupBy = require("core-js")

const people = [
    { name: 'Leandro', age: 40 },
    { name: 'Soares', age: 19 },
    { name: 'Ribeiro', age: 33 },
    { name: 'Leandro', age: 16 }
]

const data = Map.groupBy(people, person => person.name)

console.log(data);