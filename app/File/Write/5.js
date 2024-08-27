console.clear()

// Abre para escrita e posiciona o cursor no FIM do arquivo ( Arquivo não será sobrescrito )

const fs = require('node:fs')

const content = 'Some content!'

fs.appendFile('../names.txt', content, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('file written successfully')
  }
})
