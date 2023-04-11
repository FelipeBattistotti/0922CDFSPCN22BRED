const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  if (req.cookies.token) {
      try {
        jwt.verify(req.cookies.token, 'segredo')
        next()
      } catch (error) {
        res.render('login', { errors: [{ msg: error }] })
      }
  } else res.render('login', { errors: [{ msg: "Usuário não autenticado!" }] })
}

module.exports = auth