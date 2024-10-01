console.clear()

// Map aceita varios tipos como chave

const map = new Map()

const person = { nome: 1 }
const age = 30
const visa = true

map.set(person, 'leandro')
map.set(age, '30')
map.set(visa, 'Brazil')

map.forEach((key, values) => {
  console.log(key, values)
})
