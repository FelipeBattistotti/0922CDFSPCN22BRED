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
  search: (req, res) => {
    let search = req.query.keywords
    let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    res.render('results', {
      products: productsToSearch,
      search,
      toThousand,
    })
  }
}
module.exports = MainController