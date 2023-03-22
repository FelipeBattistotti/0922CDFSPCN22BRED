const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')

// # Main
// GET ALL
router.get('/', mainController.index)
// GET ALL
router.get('/search', mainController.search)

// # Product
// GET - EJS Detail - View
router.get('/product/detail/:id', productController.detailEJS)
// GET - EJS Create Form - View
router.get('/product/create', productController.createFormEJS)
// GET - EJS Update Form - View
router.get('/product/update/:id', productController.updateFormEJS)
// POST - EJS Create
router.post('/product', productController.createEJS)
// PUT - EJS Update
router.put('/product/:id', productController.updateEJS)
// DELETE - EJS Delete
router.delete('/product/:id', productController.deleteEJS)

// // # Product
// // GET ALL
// router.get('/product', productController.showAll)
// // GET By Id
// router.get('/product/:id', productController.showById)
// // POST
// router.post('/product', productController.create)
// // PUT
// router.put('/product/:id', productController.update)
// // DELETE
// router.delete('/product/:id', productController.delete)

module.exports = router