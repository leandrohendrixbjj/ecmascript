/*
   Recebe uma request aplica um Transform e retorna o response via pipe
   Este modelo não é capaz de executar um grande volume de dados
*/
console.clear()

const http = require('http')
const fs = require('fs')
const {
  Transform
} = require('stream')

const server = http.createServer((req, res) => {
  res.setHeader('Connection', 'keep-alive')
  const streamReadFile = fs.createReadStream('./userSmall.csv').setEncoding('utf-8')

  // Custom Transform Stream - Converts text to uppercase
  const upperCaseTransform = new Transform({
    transform (chunk, encoding, callback) {
      console.log(chunk.toString().toUpperCase())
      this.push(chunk.toString().toUpperCase())
      callback()
    }
  })

  res.writeHead(200, {
    'Content-Type': 'text/css'
  })
  streamReadFile
    .pipe(upperCaseTransform)
    .pipe(res)
})

server.listen(3000, () => console.log('Server is running'))
