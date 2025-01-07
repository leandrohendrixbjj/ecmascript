console.clear()

// Remove os itens duplicados

const arr = ['Ana', 'Ana', 'soares']

const data = arr.filter((value, index, arr) => {
  return arr.indexOf(value) === index
})

console.log(data)
