console.clear()

const express = require('express')
const app = express()
const data = []

app.use(express.json())

// Neste Middleware alteramos o nome em caso de um valor específico
app.use((req, res, next) => {
  if (req.body.name === 'leandro') {
    req.body.name = 'Soares'
  }
  next()
})

// Nest Middleware geramos um id para o registro
app.use((req, res, next) => {
  if (req.method !== 'POST') next()

  let id = 1
  const nextId = data[data.length - 1]

  if (nextId) {
    id += nextId.id
  }
  Object.assign(req.body, { id })
  next()
})

app.post('/', (req, res) => {
  data.push(req.body)
  res.status(200).json(data[data.length - 1])
})

app.get('/', (req, res, next) => {
  if (!data.length) { res.status(200).json({ message: 'Lista vazia' }) }

  res.status(200).json(data)
})

app.listen(3000, () => {
  console.log('Server is running at 3000')
})
