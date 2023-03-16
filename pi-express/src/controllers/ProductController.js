const products = require('../database/products.json')

const ProductController = {
  showAll(req, res) {
    res.json(products)
  },
  showById(req, res) {
    const { id } = req.params
    
    const pessoa = products.find(pessoa => String(pessoa.id) === id)
  
    if (pessoa)
        return res.json(pessoa)
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  create(req, res) {
    products.push(req.body)
    res.json(products)
  },
  update(req, res) {
    const { id } = req.params
    
    const pessoaIndex = products.findIndex(pessoa => String(pessoa.id) === id)
  
    if (pessoaIndex != -1) {
        products[pessoaIndex] = req.body
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  delete(req, res) {
    const { id } = req.params
    
    const pessoaIndex = products.findIndex(pessoa => String(pessoa.id) === id)
  
    if (pessoaIndex != -1) {
        products.splice(pessoaIndex, 1)
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  }
}
module.exports = ProductController