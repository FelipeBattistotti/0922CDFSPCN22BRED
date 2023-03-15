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

// # 1
app.get('/pessoa/:id', (req, res) => {
  const { id } = req.params
  
  const pessoa = pessoas.find(pessoa => String(pessoa.id) === id)

  if (pessoa)
      return res.json(pessoa)
  else return res.status(400).json({ error: 'Usuário não encontrado.' })
})
// # 2
app.put('/pessoa/:id', (req, res) => {
  const { id } = req.params
  
  const pessoaIndex = pessoas.findIndex(pessoa => String(pessoa.id) === id)

  if (pessoaIndex != -1) {
      pessoas[pessoaIndex] = req.body
      return res.json(pessoas)
  }
  else return res.status(400).json({ error: 'Usuário não encontrado.' })
})
// # 3
app.delete('/pessoa/:id', (req, res) => {
  const { id } = req.params
  
  const pessoaIndex = pessoas.findIndex(pessoa => String(pessoa.id) === id)

  if (pessoaIndex != -1) {
      pessoas.splice(pessoaIndex, 1)
      return res.json(pessoas)
  }
  else return res.status(400).json({ error: 'Usuário não encontrado.' })
})

app.post('/pessoa', (req, res) => {
  pessoas.push(req.body)
  res.json(pessoas)
})

app.listen(3000, () => {
  console.log('Servidor Rodando!')
})