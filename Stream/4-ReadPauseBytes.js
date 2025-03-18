console.clear()
// Pause mode: Os dados devem ser lidos conforme usuário
const fs = require('fs')

// 65536 kb
const strmReadFile = fs.createReadStream('./../userBig.csv')

let totalReads = 0
let totalBytes = 0

strmReadFile.pause()

strmReadFile.on('data', chunk => {
  totalReads++
  totalBytes += chunk.length
  console.log(`${chunk.length} bytes lindos.`)
})

strmReadFile.on('end', chunk =>
  console.log(`Fim - ${totalReads} leituras/${totalBytes} bytes.`)
)

// Mantém o node ativo
console.log('Digite: Enter 2x')
process.stdin.on('data', line => {
  if (line === '\n') {
    strmReadFile.read()
  }
})
