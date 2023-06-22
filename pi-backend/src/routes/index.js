const { body } = require('express-validator')
const express = require('express')
const router = express.Router()

/**
 * Controllers
 */
const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const userController = require('../controllers/UserController')
const orderController = require('../controllers/OrderController')

/**
 * Middlewares
 */
const upload = require('../middlewares/upload') /* Multer */
const log = require('../middlewares/log') /* Log */
const auth = require('../middlewares/auth') /* Auth */

// # Auth
// POST - Login
router.post('/login', userController.login)

// # User
// POST - Create
router.post(
  '/user',
  body('name')
    .notEmpty()
    .withMessage('Nome do Usuário deve ser informado!'),
  userController.create
)

// # Product
// GET ALL
router.get('/product', mainController.showAll)
// GET - Detail
router.get('/product/:id', productController.detail)
// POST - Create
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
  productController.create
)
// PUT - Update
router.put('/product/:id', auth, upload.any(), productController.update)
// DELETE - Delete
router.delete('/product/:id', auth, productController.delete)

// # Order
// GET - Detail
router.get('/order', auth, orderController.detail)
// POST - Create
router.post('/order', auth, orderController.create)
// PUT - Update
router.put('/order/:id', auth, orderController.update)

module.exports = router