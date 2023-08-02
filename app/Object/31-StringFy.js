// O parâmetro replacer pode ser uma função ou uma matriz
console.clear()

const person = { name: "Leandro", age: 45, zipCode: 123, state: "SP" }
const jsonString = JSON.stringify(person, ['name', 'state']);

console.log(jsonString); // {"name":'leandro',"state":SP}