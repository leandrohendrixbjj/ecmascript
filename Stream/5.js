console.clear()

const { Writable, Transform } = require('stream')
const fs = require('fs')

const strmReadFile = fs.createReadStream('./small.file', {
  highWaterMark: 100 * 1024 * 1024
}).setEncoding('utf-8')

const transformToString = new Transform({
  objectMode: true,
  transform (chunk, encoding, callback) {
    callback(null, JSON.stringify(chunk))
  }
})

const myWritableStrem = new Writable({
  write (chunk, encoding, next) {
    console.log(
      JSON.parse(chunk.toString()
      ))
    next()
  }
})

strmReadFile
  .pipe(transformToString)
  .pipe(myWritableStrem)
  .on('end', () => {})
