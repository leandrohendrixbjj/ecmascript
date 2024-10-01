console.clear()

// Map, mesmo removendo data ainda podemos acessar seu valor em memória

const map = new Map()

let data = { name: 'leandro' }

map.set(data, 'name')

data = null
map.forEach((key, value) => {
  console.log(value)
})
