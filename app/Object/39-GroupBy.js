
// groupBy => Agrupa os registros de um array
// Necessário instalar o pacote: npm i core-js ( Não é um comando nativo do nodeJs )

console.clear()
const groupBy = require("core-js")

const inventory = [
    { name: "Falcon", type: "Honda", quantity: 1 },
    { name: "Himalayan", type: "Royal", quantity: 2 },
    { name: "CB300", type: "Honda", quantity: 2 },
];

const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result);