console.clear()

// Ordena os grupos de valoes de um objeto

const key = 'id'

function orderBy (a, b) {
  return (a[key] > b[key]) ? 1 : (a[key] < b[key]) ? -1 : 0
}

const data = [
  { id: 10, name: 'Ana' },
  { id: 1, name: 'Zilda' },
  { id: 5, name: 'Bruna' }
]

console.log(data.sort(orderBy))
