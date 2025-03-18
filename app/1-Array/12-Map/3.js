console.clear()

// Remove os labels do objeto, ficando apenas os valores como key:value

const dataKeys = [
  { id: 1, name: 'leandro' },
  { id: 2, name: 'soares' },
  { id: 3, name: 'ribeiro' }
]

const data = dataKeys.map(({ id, name }) => ({ [id]: name }))

console.log(data)
