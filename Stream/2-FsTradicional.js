console.clear()

// Basicamente, colocamos todo o conteúdo do big.file na memória antes de
// escrevê-lo no objeto da response. Isso é muito ineficiente.
// Observe o consumo de memória durante o processamento
console.clear()
const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  fs.readFile('./big.file', (err, data) => {
    if (err) throw err
    res.end(data)
  })
})

server.listen(3000)
