/*
  Flowing mode: Os dados são lidos sem parada
  Sem o parâmetro: highWaterMark a leitura padrão node de 65536 kb
*/

const fs = require('fs')

const stream = fs.createReadStream('./../userBig.csv', { encoding: 'utf8' }, {
  highWaterMark: 100 * 1024 * 1024
})

// 📢 Flowing Mode - Automatically emits 'data' events
stream.on('data', (chunk) => {
  console.log('Received Chunk:', chunk)
})

// The end event fires when the file is fully read
stream.on('end', () => {
  console.log('File reading finished.')
})

// The error event fires if an issue occurs
stream.on('error', (err) => {
  console.error('Error:', err)
})
