console.clear()

require('dotenv/config')

const { createServer } = require('node:http')
const { Readable, Writable } = require('stream')
const { TransformStream } = require('node:stream/web')
const knex = require('knex')

createServer(async (request, response) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  }

  const items = 0
  const abortController = new AbortController()
  request.once('close', _ => {
    console.log('connection was closed!', items)
    abortController.abort()
  })

  try {
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

    const streamData = connection.raw('SELECT CPF, MATRICULA FROM notas_fiscais limit 100;')
      .stream()

    await Readable.toWeb(streamData)
      .pipeThrough(
        new TransformStream({
          async transform (chunk, controller) {
            const data = chunk
            console.log('data', data)
            const mappedData = {
              CPF: data.CPF,
              MATRICULA: data.MATRICULA
            }
            controller.enqueue(JSON.stringify(mappedData).concat('\n'))
          }
        })
      )
      // pipeTo é a ultima etapa
      .pipeTo(
        Writable.toWeb(response),
        {
          signal: abortController.signal
        }
      )
  } catch (error) {
    console.log(error)
  }
})
  .listen(process.env.PORT)
  .on('listening', _ => console.log(`Server is running at ${process.env.PORT}`))
