// Obtém dados de um objeto dentro de uma função
console.clear()

const person = {
   name: "leandro",
   age: "33",
   phone: "123"
}

function store({ name, age }) {
   console.log("Name:", name);
   console.log("Age:", age);
}

store(person);

