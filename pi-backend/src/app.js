const path = require("path")
const cookieParser = require('cookie-parser')
const express = require('express')
const methodOverride = require('method-override') // métodos PUT e DELETE
const cors = require('cors')
const app = express()

const log = require('./middlewares/log')
const routes = require('./routes/index')

// captura na forma de objeto literal tudo o que vem de um formulário
app.use(express.urlencoded({ extended: false }))
// converte as informações em formato JSON
app.use(express.json())
// métodos PUT e DELETE
app.use(methodOverride('_method'))
// Para funcionar os cookies
app.use(cookieParser())
// Para funcionar o CORS
app.use(cors())

// liberando acesso a pasta public
app.use(express.static(path.resolve("public")))
// Middleware Log
// app.use(log)

/**
 * Rotas
 */
app.use(routes)

app.listen(3000, () => {
  console.log('Servidor Rodando!')
})