const { Op } = require('sequelize')
const { Product } = require('../models')

const MainController = {
  showAll: async (req, res) => {
    let search = ''

    if (req.query.keywords)
        search = req.query.keywords

    try {
      const products = await Product.findAll({
        where: {
          name: {
            [Op.substring]: search
          }
        }
      })

      res.status(200).json(products)
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = MainController