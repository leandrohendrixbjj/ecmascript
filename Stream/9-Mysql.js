console.clear()

const knex = require('knex')
const { Writable, Transform } = require('stream')

const connection = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    database: 'sucos_vendas',
    user: 'root',
    password: '121212',
    charset: 'utf8',
    dateStrings: true
  }
})

const readableStream = connection
  .select(connection.raw('* FROM notas_fiscais;'))
  .stream()

const transformToString = new Transform({
  objectMode: true,
  transform (chunk, encoding, callback) {
    callback(null, JSON.stringify(chunk))
  }
})

const writableStream = new Writable({
  write (chunk, encoding, next) {
    const stringifyer = chunk.toString()
    const rowData = JSON.parse(stringifyer)
    console.log('Data', rowData)
    next()
  }
})

console.log('Iniciou', Date())
readableStream
  .pipe(transformToString)
  .pipe(writableStream)
  .on('close', () => console.log('Finalizou', Date()))
