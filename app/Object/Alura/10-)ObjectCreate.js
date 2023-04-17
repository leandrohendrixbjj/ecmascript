console.clear();

//Neste exemplo criamos o objeto B sem que seja uma referência de A.

const a = { name: "leandro" }
const b = Object.create(a);
b.name = a.name

b.name = 'soares'
console.log(a);