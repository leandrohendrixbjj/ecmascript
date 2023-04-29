console.clear();

//Neste exemplo criamos o objeto B sem que seja uma referência de A.

const a = { name: "Amanda" }
const b = Object.create(a)
b.name = a.name

b.name = 'Bruna'

console.log(`A:${a}`);
console.log(`B:${b}`);
