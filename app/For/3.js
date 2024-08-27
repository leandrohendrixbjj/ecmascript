console.clear()

// FOR IN
const data = [
  { name: 'Leandro', age: 30 },
  { name: 'Soares', age: 40 },
  { name: 'Ribeiro', age: 50 }
]

for (const row in data) {
  console.log(
    `Nome: ${data[row].name}`
  )
}
