const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

// # Product
// GET ALL
router.get('/product', ProductController.showAll)
// GET By Id
router.get('/product/:id', ProductController.showById)
// POST
router.post('/product', ProductController.create)
// PUT
router.put('/product/:id', ProductController.update)
// DELETE
router.delete('/product/:id', ProductController.delete)

module.exports = router