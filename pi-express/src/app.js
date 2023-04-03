const log = require('./middlewares/log')
const routes = require('./routes/index')
const path = require("path")
const express = require('express')
const methodOverride = require('method-override') // métodos PUT e DELETE
const app = express()
// captura na forma de objeto literal tudo o que vem de um formulário
app.use(express.urlencoded({ extended: false }))
// converte as informações em formato JSON
app.use(express.json())
// métodos PUT e DELETE
app.use(methodOverride('_method'))

// instanciando como view engine
app.set("view engine", "ejs")
// instanciando pasta views
app.set("views", path.resolve("src", "views"))
// liberando acesso a pasta public
app.use(express.static(path.resolve("public")))
// Middleware Log
app.use(log)

/**
 * Rotas
 */
app.use(routes)

app.listen(3000, () => {
  console.log('Servidor Rodando!')
})