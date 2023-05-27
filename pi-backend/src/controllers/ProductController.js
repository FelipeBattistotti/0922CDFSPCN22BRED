const { validationResult } = require('express-validator')
const { Product, ProductType } = require('../models')

const typeOptions = [
  { value: 1, desc: 'Tênis' },
  { value: 2, desc: 'Roupas' },
  { value: 3, desc: 'Skate' },
  { value: 4, desc: 'Eletrônicos' },
  { value: 5, desc: 'Artigos casa' },
]

const ProductController = {
  // Detail from one product
	detail: async (req, res) => {
		const id = req.params.id

    try {
      const product = await Product.findOne({
        where: {
          id: id
        },
        include: {
          model: ProductType,
          as: 'productType',
          required: true // aplica INNER JOIN
        }
      })

      res.status(200).json(product)
    } catch (error) {
      res.status(400).json({ error })
    }
	},
  // Create product
  create: async (req, res) => {
    let image = ''

    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.status(400).json({ error: errors.mapped() })

    try {
      if (req.files && req.files[0]) {
        image = req.files[0].filename
      } else {
        image = 'default-image.png'
      }
      
      let newProduct = {
        ...req.body,
        image: image
      }

      await Product.create(newProduct) // cria o registro no banco de dados

      res.status(201).json({ msg: 'Produto criado com sucesso!' })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Update product
  update: async (req, res) => {
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

          res.status(200).json({ msg: 'Produto alterado com sucesso!' })
      } else return res.status(400).json({ error: 'Produto não encontrado.' })

    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Delete product
  delete: async (req, res) => {
    const { id } = req.params

    try {
      await Product.destroy({
        where: {
          id: id
        }
      }) // remove o registro do banco de dados

      res.status(200).json({ msg: 'Produto excluído!' })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = ProductController