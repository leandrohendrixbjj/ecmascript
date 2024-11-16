console.clear()

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(206, { 'Content-Type': 'text/css' })

  const strmReadFile = fs.createReadStream('./big.file', {
    highWaterMark: 500 * 1024 * 1024
  }).setEncoding('utf-8')

  strmReadFile.pipe(res)
})

server.listen(3000, () => console.log('Server is running'))
