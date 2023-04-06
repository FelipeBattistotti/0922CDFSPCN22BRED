const { body } = require('express-validator')
const express = require('express')
const router = express.Router()

/**
 * Controllers
 */
const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const userController = require('../controllers/UserController')

/**
 * Middlewares
 */
const upload = require('../middlewares/upload') /* Multer */
const log = require('../middlewares/log')

// # Main
// GET ALL
router.get('/', mainController.index) // router.get('/', log, mainController.index)
// GET ALL
router.get('/search', mainController.search)

// # User
// GET - EJS Create Form - View
router.get('/user/create', userController.createFormEJS)
// POST - EJS Create
router.post(
  '/user',
  body('name')
    .notEmpty()
    .withMessage('Nome do Usuário deve ser informado!'),
  userController.createEJS
)

// # Product
// GET - EJS Detail - View
router.get('/product/detail/:id', productController.detailEJS)
// GET - EJS Create Form - View
router.get('/product/create', productController.createFormEJS)
// GET - EJS Update Form - View
router.get('/product/update/:id', productController.updateFormEJS)
// POST - EJS Create
router.post(
  '/product',
  upload.any(),
  body('name')
    .notEmpty()
    .withMessage('Nome do Produto deve ser informado!'),
  body('description')
    .notEmpty()
    .withMessage('Descrição deve ser informada!'),
  productController.createEJS
)
// PUT - EJS Update
router.put('/product/:id', upload.any(), productController.updateEJS)
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