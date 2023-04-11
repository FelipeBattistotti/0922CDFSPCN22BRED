const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const users = require('../database/users.json')

const UserController = {
  // Create form user - View
  createFormEJS: (req, res) => {
    res.render('user-create-form')
  },
  // Create user
  createEJS: (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.render('user-create-form', { errors: errors.mapped() }) // ou array()

    const user = users.find(user => user.email === req.body.email) // encontra o usuário através do e-mail - e retorna o objeto

    if (!user) {
        let newUser = {
          id: users.length > 0 ? Number(users[users.length - 1].id) + 1 : 1,
          ...req.body
        }
        // delete newUser.pwdConfirm // remove propriedade pwdConfirm - porque não é necessário gravar no banco

        const hash = bcrypt.hashSync(newUser.pwd, 10) // gera o hash da senha
        newUser.pwd = hash // salva na propriedade senha

        users.push(newUser)
        
        res.redirect('/')
    } else res.render('user-create-form', { errors: [{ msg: "Usuário já cadastrado!" }] })
  },
  // Login form user - View
  loginFormEJS: (req, res) => {
    res.render('login')
  },
  // Login
  loginEJS: (req, res) => {
    const user = users.find(user => user.email === req.body.email) // encontra o usuário através do e-mail - e retorna o objeto

    if (user && bcrypt.compareSync(req.body.pwd, user.pwd)) { // compara a senha recebida no body com a senha gravada no banco de dados
        const token = jwt.sign({ id: user.id, email: user.email }, 'segredo') // gera o token do usuário com JWT
        res.cookie('token', token, { maxAge: 2592000000 }) // expira em 30 dias

        res.redirect('/')
    } else res.render('login', { errors: [{ msg: "Usuário ou Senha incorretos!" }] })
  }
}
module.exports = UserController