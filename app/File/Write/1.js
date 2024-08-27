console.clear()

// Forma mais simples de escrever em um Arquivo
// Toda vez que executado, o arquivo é sobrescrito

const fs = require('node:fs')

const content = 'Anna'

fs.writeFile('../names.txt', content, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('file written successfully')
  }
})
