const express = require('express')
const router = express.Router()

router.get('/filmes', (req, res) => {
  res.send('Lista de filmes')
})