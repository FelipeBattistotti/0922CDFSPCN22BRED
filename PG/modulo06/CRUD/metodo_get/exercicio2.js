const express = require('express');
const router = express.Router();

const celulares = [
  {
    nome: 'Motorola Moto E6 Plus',
    preco: 14999
  },
  {
    nome: 'Motorola Moto G7',
    preco: 19999
  },
  {
    nome: 'Alcatel 5033A',
    preco: 6999
  },
  {
    nome: 'Samsung Galaxy A50',
    preco: 33499
  }
]

router.get('/celulares', (req, res) => {
  const max = req.query.max || 100000;
  const filtrados = celulares.filter(celular => celular.preco < max);
  res.send(filtrados);
})