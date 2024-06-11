console.clear()

// Cria um arquivo com dados
const data = ['Leandro', 'Soares', 'Ribeiro']

const fs = require('fs')
const file = fs.createWriteStream('./names.txt')

for (let row = 0; row < data.length; row++) {
  file.write(`${row}-${data[row]};\n`)
}

file.end()
