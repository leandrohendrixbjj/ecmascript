console.clear();
// Map aceita varios tipos como chave

const map = new Map();

let person = { nome: 1 }
let age = 30
let visa = true

map.set(person, 'leandro')
map.set(age, '30')
map.set(visa, 'Brazil')

map.forEach((key, values) => {
    console.log(key, values);
})
