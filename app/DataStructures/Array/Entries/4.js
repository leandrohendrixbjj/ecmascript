console.clear();

// Convertendo um Object em um Map
const person = {
    name: 'leandro',
    age: 30,
    city: 'sao paulo'
}

let map = new Map(Object.entries(person))

console.log(map);

