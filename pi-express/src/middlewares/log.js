const fs = require('fs')

const log = (req, res, next) => {
  const file = 'src\\logs\\logs.txt'

  if (!fs.existsSync(file)) // verifica se o arquivo existe
      fs.writeFileSync(file, '') // caso não existir - então cria

  fs.appendFileSync(file, 'O usuário acessou a rota: ' + req.url + ' - ' + new Date() + '\n') // atualiza o arquivo
  next()
}
module.exports = log