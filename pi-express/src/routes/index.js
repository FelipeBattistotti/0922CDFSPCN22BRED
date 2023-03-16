const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

// Product
router.get('/pessoa', ProductController.showAll)
// # 1
router.get('/pessoa/:id', ProductController.showById)
router.post('/pessoa', ProductController.create)
// # 2
router.put('/pessoa/:id', ProductController.update)
// # 3
router.delete('/pessoa/:id', ProductController.delete)

module.exports = router