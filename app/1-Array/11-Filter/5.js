console.clear()

// Procurando em um array

const data = ['leandro', 'soares', 'leonardo']
const search = 'le'

const names = data.filter((element) => element.indexOf(search) > -1)

console.log(names)
