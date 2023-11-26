// Cria um novo objeto a partir de um existente
console.clear()

const person = {
   name: "Leandro",
   age: 33
}

// Created a new object
const data = {
   ...person,
   phone: "123123"
}

console.log('Person', data); //Person { name: 'leandro', age: 33, phone: '123123' }