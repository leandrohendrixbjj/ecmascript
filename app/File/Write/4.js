console.clear()

// Flags
// w+ => Posiciona o cursor no INICIO do arquivo para escrita ( Arquivo SERÁ sobrescrito )
// a =>  Abre para escrita e posiciona o cursor no FIM do arquivo ( Arquivo não será sobrescrito )
// a+ => Abre para escrita, leitura e pocisiona o cursor no FIM do arquivo para escrita ( Arquivo não será sobrescrito )

const fs = require('node:fs')

const content = 'Soares'
fs.writeFile('../names.txt', content, { flag: 'a' }, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('file written successfully')
  }
})
