const { validationResult } = require('express-validator')
const { Product } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {
  showAll: (req, res) => {
    res.json(products)
  },
  showById: (req, res) => {
    const { id } = req.params
    
    const product = products.find(product => String(product.id) === id)
  
    if (product)
        return res.json(product)
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  create: (req, res) => {
    products.push(req.body)
    res.json(products)
  },
  update: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products[productIndex] = req.body
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  delete: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products.splice(productIndex, 1)
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },

  /**
   * EJS
   */
  // Detail from one product
	detailEJS: async (req, res) => {
		const id = req.params.id

    try {
      const product = await Product.findByPk(id)

      res.render('detail', {
        product,
        toThousand
      })
    } catch (error) {
      res.status(400).json({ error })
    }
	},
  // Create form product - View
  createFormEJS: (req, res) => {
    res.render('product-create-form')
  },
  // Create product
  createEJS: async (req, res) => {
    let image = ''

    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.render('product-create-form', { errors: errors.mapped() }) // ou array()

    try {
      if (req.files[0] !== undefined) {
        image = req.files[0].filename
      } else {
        image = 'default-image.png'
      }
      
      let newProduct = {
        ...req.body,
        image: image
      }

      await Product.create(newProduct) // cria o registro no banco de dados

      res.redirect('/')
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Update form product - View
  updateFormEJS: async (req, res) => {
    const id = req.params.id

    try {
      const productToEdit = await Product.findByPk(id)

      res.render('product-edit-form', { productToEdit })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Update product
  updateEJS: async (req, res) => {
    const { id } = req.params
    let image = ''
    
    try {
      const productToEdit = await Product.findByPk(id)
    
      if (productToEdit != undefined) {
          if (req.files[0] !== undefined) {
              image = req.files[0].filename
          } else {
              image = productToEdit.image
          }

          let product = {
            ...req.body,
            image: image
          }

          await Product.update(
            product,
            {
              where: {
                id: id
              }
            }
          ) // atualiza o registro no banco de dados

          res.redirect('/')
      } else return res.status(400).json({ error: 'Produto não encontrado.' })

    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Delete product
  deleteEJS: async (req, res) => {
    const { id } = req.params

    try {
      await Product.destroy({
        where: {
          id: id
        }
      }) // remove o registro do banco de dados

      res.redirect('/')
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = ProductController