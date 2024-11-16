console.clear()

require('dotenv/config')

const { createServer } = require('node:http')
const fs = require('node:fs/promises')
const byteSize = require('byte-size')
const { createReadStream } = require('node:fs')
const { Readable, Transform, Writable } = require('stream')
const { TransformStream } = require('node:stream/web')
const csvtojson = require('csvtojson')

createServer(async (request, response) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  }

  let items = 0
  const abortController = new AbortController()
  request.once('close', _ => {
    console.log('connection was closed!', items)
    abortController.abort()
  })

  try {
    const filename = 'small.csv'
    response.writeHead(200, headers)

    const { size } = await fs.stat(filename)
    console.log('processing: ', `${byteSize(size)}`)

    const fileStream = createReadStream(filename)

    await Readable.toWeb(fileStream)
      .pipeThrough(
        Transform.toWeb(csvtojson(
          { headers: ['line'] }
        ))
      )
      .pipeThrough(
        new TransformStream({
          async transform (chunk, controller) {
            const data = JSON.parse(Buffer.from(chunk))
            const mappedData = {
              line: data.line
            }
            items++
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
