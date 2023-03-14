const express = require('express')
const app = express()
app.use(express.json())

const pessoas = require('./pessoas.json')

app.get('/', (req, res) => {
  res.send('Oi Servidor')
})

app.get('/pessoa', (req, res) => {
  res.json(pessoas)
})

app.get('/pessoa/:id', (req, res) => {
  const { id } = req.params
  console.log('ID: ', id)
  res.send('ACHOU')
})

app.post('/pessoa', (req, res) => {
  pessoas.push(req.body)
  res.json(pessoas)
})

app.listen(3000, () => {
  console.log('Servidor Rodando!')
})