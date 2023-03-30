console.clear();
// itera graciosamente através de chave-valor (key-value)
const person = {
    name: 'leandro',
    age: 30,
    city: 'sao paulo'
}

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
})