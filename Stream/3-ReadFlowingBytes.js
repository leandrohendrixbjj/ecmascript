/*
  Flowing mode: Os dados são lidos sem parada
  Sem o parâmetro: highWaterMark a leitura padrão node de 65536 kb
*/

console.clear()
const fs = require('fs')

// 100MB
const strmReadFile = fs.createReadStream('./../userBig.csv', {
  highWaterMark: 100 * 1024 * 1024
})

let totalReads = 0
let totalBytes = 0

strmReadFile.on('data', chunk => {
  totalReads++
  totalBytes += chunk.length
  console.log(`${chunk.length} bytes lindos.`)
})

strmReadFile.on('end', chunk =>
  console.log(`Fim - ${totalReads} leituras/${totalBytes} bytes.`)
)

// Mantém o node ativo
process.stdin.on('data', () => { })
