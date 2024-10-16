console.clear()

const strem = require('stream')

const myWritableStrem = new strem.Writable({
  write(chunk, encoding, next){
    console.log(chunk.toString())
    next()    
  }
})

process.stdin.pipe(myWritableStrem)