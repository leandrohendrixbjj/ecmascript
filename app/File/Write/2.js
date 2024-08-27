console.clear()

// Forma mais simples de escrever em um Arquivo ( COM TRY E CATCH )
// Toda vez que executado, o arquivo é sobrescrito

const fs = require('node:fs')

const content = 'Soares'

try {
  fs.writeFileSync('../names.txt', content)
  console.log('file written successfully')
} catch (err) {
  console.error(err)
}
