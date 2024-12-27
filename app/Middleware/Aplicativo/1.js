console.clear()
const express = require('express')
const app = express()

// Permire Obter os dados da Request tipo POST
app.use(express.json())

// Middleware de Aplicativo
app.use((req, res, next) => {
  // Impressão de msg sempre que uma request for efetuada
  const today = new Date()
  const timer = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

  console.log(`UTC Hours ${timer} `)
  next()
})

// Ilustra uma sub-pilha de middleware
app.get('/user', (req, res, next) => {
  console.log('Request Resource URL', req.originalUrl)
  res.send('User')
  next()
}, (req, res, next) => {
  console.log('Request Type', req.method)
  next()
})

app.listen(3000, () => {
  console.log('Server is running')
})
