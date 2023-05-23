const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  if (req.headers.authorization) {
      try {
        jwt.verify(req.headers.authorization, 'segredo')
        next()
      } catch (error) {
        res.status(401).json({ error })
      }
  } else res.status(401).json({ error: "Usuário não autenticado!" })
}

module.exports = auth