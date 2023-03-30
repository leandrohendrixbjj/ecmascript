console.clear();
// itera graciosamente através de chave-valor (key-value)
const person = {
    name: 'leandro',
    age: 30,
    city: 'sao paulo'
}

for (var [key, value] of Object.entries(person)) {
    console.log(`${key} ${value}`);
}