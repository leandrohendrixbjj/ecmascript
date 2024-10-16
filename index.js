console.clear()

const http = require('http')
const fs = require('fs')
const { Writable, Transform } = require('stream')


const server = http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/css'})
  
  // fs.createReadStream('./small.file', {
  //   highWaterMark: 100 * 1024 * 1024
  // }).pipe(res)

  const strmReadFile = fs.createReadStream('./Stream/big.file', {
    highWaterMark: 500 * 1024 * 1024
  }).setEncoding('utf-8')        
  
  strmReadFile.pipe(res)
})

//server.setTimeout = 160000
server.listen(3000, () => console.log('Server is running'))