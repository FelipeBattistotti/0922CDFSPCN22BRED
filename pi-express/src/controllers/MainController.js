const { Op } = require('sequelize')
const { Product } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll()

      res.render('index', {
        products,
        toThousand
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  search: async (req, res) => {
    let search = req.query.keywords

    try {
      const productsToSearch = await Product.findAll({
        where: {
          name: {
            [Op.substring]: search
          }
        }
      })

      res.render('results', {
        products: productsToSearch,
        search,
        toThousand,
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = MainController