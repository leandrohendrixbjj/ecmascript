// Pause mode: Dados são lidos conforme interação do usuário, nesse caso tecla Enter

console.clear()
const fs = require('fs')

const strmReadFile = fs.createReadStream('./../userBig.csv', {
  encoding: 'utf8'
})

strmReadFile.pause()

strmReadFile.on('data', (chunk) => {
  console.log('Received Chunk:', chunk)
})

strmReadFile.on('end', chunk =>
  console.log('File reading finished.')
)

// Mantém o node ativo
console.log('Digite: Enter 2x')
process.stdin.on('data', line => {
  // eslint-disable-next-line
  if (line == '\n') {
    strmReadFile.read()
  }
})
