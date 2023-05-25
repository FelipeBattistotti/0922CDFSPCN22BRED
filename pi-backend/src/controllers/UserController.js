const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../models')

const UserController = {
  // Create user
  create: async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.status(400).json({ error: errors.mapped() }) // ou array()

    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      }) // encontra o usuário através do e-mail - e retorna o objeto

      if (!user) {
          let newUser = {
            ...req.body
          }

          const hash = bcrypt.hashSync(newUser.pwd, 10) // gera o hash da senha
          newUser.pwd = hash // salva na propriedade senha

          await User.create(newUser) // cria o registro no banco de dados

          res.status(201).json({ msg: 'Usuário criado com sucesso!' })

      } else res.status(400).json({ error: "Usuário já cadastrado!" })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Login
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      }) // encontra o usuário através do e-mail - e retorna o objeto
      
      if (user && bcrypt.compareSync(req.body.pwd, user.pwd)) { // compara a senha recebida no body com a senha gravada no banco de dados
        const token = jwt.sign({ id: user.id, email: user.email }, 'segredo') // gera o token do usuário com JWT
        res.status(200).json({ token })
        
      } else res.status(400).json({ error: "Usuário ou Senha incorretos!" })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = UserController