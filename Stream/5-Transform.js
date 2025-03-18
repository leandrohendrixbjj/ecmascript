// Transform mode: Modifica os dados lidos antes da impressão

console.clear()

const {
  Transform,
  pipeline
} = require('stream')

const fs = require('fs')

const stremReadFile = fs.createReadStream('./userBig.csv', {
  highWaterMark: 500 * 1024 * 1024
}).setEncoding('utf-8')

const streamWriteFile = fs.createWriteStream('user.txt')

// Custom Transform Stream - Converts text to uppercase
const upperCaseTransform = new Transform({
  transform (chunk, encoding, callback) {
    console.log(chunk.toString().toUpperCase())
    this.push(chunk.toString().toUpperCase()) // Convert to uppercase
    callback()
  }
})

pipeline(
  stremReadFile,
  upperCaseTransform,
  streamWriteFile,
  (error) => {
    if (error) {
      throw new Error('Pipeline failed', error)
    }
    console.log('Pipeline successfully.')
  }
)
