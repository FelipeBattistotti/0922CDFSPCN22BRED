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
const log = require('../middlewares/log') /* Log */
const auth = require('../middlewares/auth') /* Auth */

// # Main
// GET ALL
router.get('/search', mainController.search)

// # Auth
// POST - EJS Login
router.post('/login', userController.loginEJS)

// # User
// POST - EJS Create
router.post(
  '/user',
  body('name')
    .notEmpty()
    .withMessage('Nome do Usuário deve ser informado!'),
  userController.createEJS
)

// # Product
// GET
router.get('/product', mainController.index)
// GET - EJS Detail - View
router.get('/product/detail/:id', productController.detailEJS)
// GET - EJS Create Form - View
router.get('/product/create', auth, productController.createFormEJS)
// GET - EJS Update Form - View
router.get('/product/update/:id', auth, productController.updateFormEJS)
// POST - EJS Create
router.post(
  '/product',
  auth,
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
router.put('/product/:id', auth, upload.any(), productController.updateEJS)
// DELETE - EJS Delete
router.delete('/product/:id', auth, productController.deleteEJS)

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