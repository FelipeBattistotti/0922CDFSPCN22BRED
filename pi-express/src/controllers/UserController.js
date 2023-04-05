const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
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

    let newUser = {
			id: users.length > 0 ? Number(users[users.length - 1].id) + 1 : 1,
			...req.body
		}

    const hash = bcrypt.hashSync(newUser.pwd, 10) // gera o hash da senha
    newUser.pwd = hash // salva na propriedade senha

    users.push(newUser)

    console.log('users: ', users)

    res.redirect('/')
  }
}
module.exports = UserController