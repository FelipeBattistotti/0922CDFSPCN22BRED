
// # PADRÕES MVC

// ## Controllers

// ### exercício 1

// Começa um novo e lindo dia e chega um novo pedido do cliente. Você está trabalhando num controller de um carrinho de compras de um e-commerce. Te pediram para que, quando um cliente adicionasse um produto ao carrinho, ele retorna-se uma mensagem 'Item Adicionado'.

// > O líder técnico em sua área informa que, para atender a esse requisito, você deve modificar a função addItem para receber os parâmetros req e res. Dito isto, o líder técnico se afasta misteriosamente, dizendo que você deve analisar como retornar a mensagem 'Item Adicionado' utilizando os dois parâmetros: req e res.
// > 


let CarrinhoController = {
   removeItem: function(){},
   getItem: function(){},
   addItem: function(req, res){res.send('Item Adicionado')}
};

module.exports = CarrinhoController


// ### exercício 2

// Você criou um controller para lidar com o carrinho de compras (CarrinhoController). Você já estava indo embora quando o líder do projeto percebeu que não existe uma rota configurada para o seu controller! Você bem que tentou, mas ele te alcançou antes de você tocar na maçaneta! Não teve jeito.

// > Crie uma rota get para o endereço raíz (/) passando como parâmetro :item. Essa rota deve redirecionar para o método addItem do CarrinhoController
// > 


let express = require('express')

let router = express.Router();

let CarrinhoController = require('../controllers/CarrinhoController')

router.get('/:item',CarrinhoController.addItem)

module.exports = router


// ### 

// ## Rotas Parametrizadas

// ### exercício 1

// ### **Vamos listar todas as séries!**

// > Temos uma lista de muitas séries armazenadas na variável series. O seu trabalho será criar um caminho que aponte para o endereço "/series" e devolva todas elas.
// > 


const express = require('express');
const app = express();

app.get('/series', (req, res) => {
    res.send(series)
})


// ### exercício 2

// ****Vamos ver como configurar a nossa primeira rota parametrizada com o Express.****Queremos que você crie uma rota que aponte para "/serie" e que ela, por sua vez, receba um número. Esse número vai representar a identificação da série que tentamos visualizar. Portanto, a rota deve retornar apenas a série que corresponde ao id que veio pelo parâmetro.

// Um exemplo de como seria a rota: http://localhost/serie/3
// *Lembre-se que a variável da series já foi declarada, contem um array de objetos e você pode usá-la apenas escrevendo seu nome. Clique em **Details** para ver uma informação adicional.*Exemplo de informações que está no array:

//   `
//     const series = [
//       {
//         id: 1,
//         nome: 'Irmão do Jorel'
//       },
//       {
//         id: 2,
//         nome: 'Um maluco no pedaço'
//       }
//     ]`
// Lembre-se que esses são apenas exemplos.


const express = require('express');
const app = express();

app.get('/serie/:id', (req, res) => {
    const { id } = req.params;
    const serie = series.find(s => s.id === Number(id))
    res.send(serie)
})


// ## Sistema de roteamento

// ### exercício 1

// ****Vamos modular as rotas para as séries.****

// Queremos que o arquivo series.js processe TODOS os pedidos do recurso. Como primeiro passo pedimos que você crie a variável express e armazene o módulo express nela.

// Então, você deve criar a variável router e armazenar nela a execução do método que nos permite gerenciar um sistema de rotas.


const express = require('express');
const router = express.Router();


// ## exercício 2

// No script deste exercício já definimos as rotas relacionadas com os request das informações contidas no array de séries.

// O seu trabalho será tornar esse código "visível" para assim podermos acessá-lo a partir de outros arquivos.

// *Lembra como fazer isso? Quem é responsável pelo compartilhamento de todos esses caminhos definidos?*


const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
});
router.get('/:genero', (req,res) => {
});
router.get('/criar', (req,res) => {
});

module.exports = router


// ## exercício 3

// A partir do arquivo index.js queremos acessar o arquivo series.js. Seu trabalho será solicitar esse módulo e armazená-lo na variável rotasSeries. Finalmente, queremos que esse módulo se encarregue de tratar de todos as solicitações que venham de séries.

// Antes de começarmos... Tenha em mente que estamos lidando com um sistema de rotas e organização de diretórios é MUITO importante, portanto o arquivo series.js é armazenado na pasta de **routes**.


const express = require('express');
const app = express();

const rotasSeries = require('./routes/series');
app.use('/series', rotasSeries);


// ## Vistas com EJS

// ## Primeira View

// ### exercício 1

// Para este exercício pedimos que complete o controlador do usuário fazendo com que ao invocar o loginUser o mesmo renderize com EJS a view login.


let userController = {
    loginUser: function (req,res){
        res.render('login');
    }
}

// ## ViSTAS COM EJS
// ## Parâmetros compartilhados

// ### exercício 1

// Analisando o HTML  abaixo, escreva o código necessário no controller para que o mesmo possa enviar ao template engine as variáveis necessárias para poder executar o código.

// Ah, o nome da nossa view é **checkout**.Código HTML:

// `<% for(let i =0; i < itens.length; i++) {`

// `<li>`

// `<%= itens[i] %>`

// `</li>`

// `<% } %>`


let produtos = ['Sorvete 250g', 'Bolacha de Chocolate', 'Maçã 500g'];
       let carrinhoController = {
         checkout: function (req,res){
             res.render('checkout',{itens:produtos});
         }
     }


// # CRUD

// ## **Métodos HTTP**

// ### exercício 1

// Vamos criar nossa primeira rota com express. Para isso, crie a constante chamada express e faça um require do módulo express.

// Em seguida, crie uma constante chamada router e atribua a mesma a inicialização da função Router do express.

// Finalmente, usando a constante router cria uma rota "/filmes" que responda ao método GET.

// Para checar se tudo está funcionado faça com que a rota retorne como resposta "Lista de filmes"


const express = require('express');
const router = express.Router();

router.get('/filmes', (req, res) => {
	res.send('Lista de filmes');
});


// ## **Método Get**

// ### exercício 1

// Imagine que temos uma página web que mostra produtos. Gostaríamos de poder mostrar a lista de todos os produtos. Por padrão vamos mostrar todos os produtos sem se importar com a sua categoria e vamos ordenar essa lista alfabeticamente segundo o nome do produto. Mas também queremos que o usuário possa filtrar pro categoria e ordenar por outro campo (por exemplo preço). Percebemos que a melhor opção para chegar nesse resultado é uma rota que utilize query string.

// 1. Cria a rota "/produtos".
// 2. A partir do request recuperar a query string e mostra-la usando o método send do objeto response.


const express = require('express');
const router = express.Router();

router.get('/produtos', (req, res) => {
    res.send(req.query);
});


// ### exercício 2

// Temos uma lista de celulares, cada um com seu preço.Vamos criar a rota "/celulares" do tipo GET para listar todos.Para mostrar a lista devemos usar o método send do parâmetro response.Bem, agora também gostaríamos de poder filtrar a lista de celulares em função do preço. O usuário deveria acessar uma url que tenha uma query string com o parâmetro "max". A partir desse parâmetro nós temos que devolver a lista de celulares contudo mostrando apenas aqueles cujo preço não supere o do parâmetro "max".

// Por exemplo, se o usuário acessar a url /celulares?max=20000 deveríamos listar todos os modelos menos o "Samsung Galaxy A50"


router.get('/celulares', (req, res) => {
    const max = req.query.max || 100000;
    const filtrados = celulares.filter(celular => celular.preco < max);
    res.send(filtrados);
});


// ## **Método Post**

// ### exercício 1

// Agora vamos trabalhar com POST. Você se lembra que as URL do tipo POST são utilizadas para guardar informações em nossa base de dados ou mandar informações sensíveis. Para recuperar os dados enviados por POST nós utilizamos o atributo body do objeto request. Mas antes é necessário indicar ao express que vamos trabalhar com JSON e que a informação seja enviada no formato correto. Portanto é necessário executar duas linhas de código de acordo com o método use do objeto app.

// Já tendo criado a constante app use-a para adicionar a configuração necessária (urlencoded e json) para trabalhar com post.


const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use( express.json() );


// ### exercício 2

// Para recuperar a informação em rotas com o método POST utilizamos o atributo body do objeto request.Vamos criar uma rota do tipo POST chamada "/ver-body" onde, através do método send, mostraremos no navegador o conteúdo do atributo body.

// Primeiro temos que criar a constante router e atribuir o objeto Router do express.Para criar a ruta vamos utilizar o método post do objeto router.


const express = require('express');
const router = express.Router();

router.post("/ver-body", (req, res) => {
    res.send(req.body);
});


// ### exercício 3

// Para este exercício temos um objeto já criado que tem dois atributos, ambos estão com valor null. Nós vamos ter que indicar um valor para cada um de nossos atributos segundo os dados enviados por POST. Para isso vamos criar uma rota do tipo POST que aponte para "/criar/produto". Vai ser essa a rota que o usuário nos enviará os dados: nome e preço do produto. Nos vamos recuperar esses dados a partir do atributo body request e vamos adiciona-los ao nosso objeto produto. Uma vez finalizado enviaremos o objeto produto ao usuário usando o método send.

// ***OBS:** **não usar desestruturação neste exercício***


const express = require('express');
const router = express.Router();

let produto = {
    nome: null,
    preco: null
};

router.post("/criar/produto", (req, res) => {
	produto.nome = req.body.nome;
	produto.preco = req.body.preco;
    res.send(produto);
});


// ## **Método PUT E DELETE**

// ### exercício 1

// Agora vamos trabalhar com rotas do tipo PUT e DELETE. Lembre-se que as URL do tipo PUT são utilizadas somente para modificar informações enquanto as rotas do tipo DELETE são utilizadas para eliminar registros. Dado que esses métodos não são suportados por todos os navegadores é necessário usar a dependência method-override para assegurar a compatiblidade. Para tal, nesse exercício, você vai criar a constante methodOverride que vai requisitar o módulo "method-override" e em seguida configurar o objeto app passando ao mesmo o método use e a expressão methodOverride("_method").

// Dica: Lembre-se que quando está trabalhando no seu projeto a dependência method-override não vêm por padrão no node, vai ser necessário que a instale executando o seguinte comando no terminal: npm install method-override --save


const express = require('express');
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method"));


// ### exercício 2

// Os formulários em HTML apenas suportam os métodos GET e POST. É por isso que em nossos arquivos node devemos usar a dependência "method-override" para pode simular o envio de dados mediante PUT ou DELETE. Mas também é necessário adicionar no atributo action de nossos formulários uma query string para que os dados sejam enviados corretamente. Dado o seguinte formulário modifique o atributo action para que ele permita o envio de dados utilizando PUT.


<html>
  <head>
    <title>Formulario de registro</title>
  </head>
  <body>
    <form action="usuarios/atualizar?_method=PUT" method="POST">

    </form>
  </body>
</html>


// ### exercício 3

// Temos um Json com três filmes

// Vamos tratar de criar uma ruta para editar os dados de um filme em particular. Um usuário vai ter de ser capaz de enviar dados através de um formulário e nós devemos editar a película escolhida. Para indicar a película a ser modificada vamos receber a url e a id correspondente.  Em outras palavras, devemos criar um caminho do tipo PUT para os casos filme/1, filme/2, etc.

// Para isso vamos ter que criar a partir do objeto router uma rota do tipo PUT que responsa a qualquer uma das urls mencionadas anteriormente.Devemos ser capazes de identificar o filme, dependendo do ID que nos é passado como parâmetro, e atualizar seus dados com os que nos são enviados.


let filmes = [
    {
        id: 1,
        titulo: 'Spider-Man: Longe de casa',
        duracao: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracao: 100,
        genero: 'Animacao'
    },
    {
        id: 3,
        titulo: 'X-Men: Fênix Negra',
        duracao: 113,
        genero: 'Acao'
    }
];

const express = require('express');
const router = express.Router();

router.put('/filme/:id', (req, res) => {
    filmes.forEach(f => {
        if (f.id == req.params.id) {
            f.titulo = req.body.titulo;
            f.duracao = req.body.duracao;
            f.genero = req.body.genero;
        }
    });
});


// ### exercício 4

// Dado o seguinte array com produtos, você deve criar uma rota "/celular" do tipo DELETE que receba um id e elimine um produto. Deveremos criar uma rota para os casos celular/1, celular/2, etc.

// Para apagar o produto do array podemos usar a função filter igualando o array celulares a celulares.filter donde dentro do método retornamos todos os produtos que não coincidam com o id passado por parâmetro.

// Se te for mais prático fazer de outra maneira, vá em frente! O importante é que o produto com o id passado por parâmetro seja removido do array celulares.


let celulares = [
    {
        id: 1,
        nome: 'Motorola Moto E6 Plus',
        preco: 14999
    },
    {
        id: 2,
        nome: 'Motorola Moto G7',
        preco: 19999
    },
    {
        id: 3,
        nome: 'Alcatel 5033A',
        preco: 6999
    },
    {
        id: 4,
        nome: 'Samsung Galaxy A50',
        preco: 33499
    }
];

const express = require('express');
const router = express.Router();

router.delete('/celular/:id', (req, res) => {
    celulares = celulares.filter(c => c.id != req.params.id);
});


// ## **Erro 404**

// ### exercício 1

// Já temos nossa aplicação quase pronta. Fomos adicionando rotas e chamando-as com app.use(). Nos faltaria adicionar código para os casos em que o usuário entre por url em uma secção que não existe, em outras palavras, que não tenha uma rota definida para esse endereço.

// Para isso vamos configurar uma nova linha no final do nosso código onde usamos app.use(). Esse método use vai receber um callback o qual terá três parâmetros: req,res e next. Dentro deste callback vamos usar o parâmetro res para retornar o status 404 e mostrar uma nova view chamada "not-found"


const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello world');
});

app.use(router);

app.use((req, res, next) => {
  res.status(404).render("not-found")
});


// # CRUD-upload de arquivos/multer

// ## multer: subindo arquivos


// ### exercício 1

// **Preparando formulários para subir arquivos**

// Ao carregar arquivos através do formulário, não apenas precisamos configurar nosso código no Node, mas também devemos adicionar uma configuração extra na tag form.

// Dado o seguinte formulário, adicione o atributo enctype com o valor correspondente para permitir o envio de arquivos.


<html>
  <head>
    <title>Upload de Imagens</title>
  </head>
  <body>
    <form action="upload" method="POST" enctype="multipart/form-data">

    </form>
  </body>
</html>


// ### exercício 1

// # **Usando Multer para subir arquivos**

// No Node, para fazer upload de arquivos, podemos usar ferramentas como multer. É simplesmente necessário adicioná-lo ao arquivo de rota onde nossa rota ou rotas são responsáveis pelo upload de arquivos (imagens, documentos, etc.).

// Neste exemplo, adicionaremos multer ao arquivo de routes user.js para permitir que os usuários anexem uma imagem durante o registro.

// Para isso, será necessário requisitar o módulo multer, criar o armazenamento, inicializar a variável de upload e adicionar a rota que já temos definidas a expressão upload.any() como segundo parâmetro.

// Para ver a configuração que a multer precisa para funcionar, consulte a documentação oficial: [https://www.npmjs.com/package/multer#diskstorage](https://www.npmjs.com/package/multer#diskstorage).


const express = require('express');
const router = express.Router();
const  multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

router.post('/register', upload.any(), usersController.save);


// ## Multer: Validação

// ### VALIDACAO

// Precisamos enviar um formulário, mas antes precisamos verificar se todos os inputs foram devidamente preenchidos!

window.addEventListener('load', () => {
    const formulario = document.getElementById('formulario')
    const nomeInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const senhaInput = document.getElementById('password')
    const errosContainer = document.getElementById('errors')

    const erros = []

    formulario.addEventListener('submit', (event) => {
        event.preventDefault()
        if(nomeInput.value == "") {
            erros.push("O campo nome não foi preenchido")
        }
        if(emailInput.value == "") {
            erros.push("O campo email não foi preenchido")
        }
        if(senhaInput.value == "") {
            erros.push("O campo senha não foi preenchido")
        }

        if(erros.length > 0) {
            erros.forEach(erro => {
                errosContainer.innerHTML += "<li>" + erro + "</li>"
            });
        }
    })  
})


// # Middleware

// ### Middleware: aplicação global

// ****Adicionando o middleware express.json()****

// Nós já temos a nossa rota de registro. O que precisamos fazer agora é adicionar uma validação para que o campo de e-mail seja do tipo email e a senha tenha, pelo menos, 6 caracteres.

// Para conseguir isso, vamos requerer o módulo de express-validator e, usando o destructuring, vamos inicializar três constantes: check, validationResult e body.(PS: Por limitações, é aconselhado que dê um alias para o método check, mudando o nome para ‘checar’).

// Em nossa rota, adicionaremos como segundo parâmetro um array. Ele terá apenas duas posições, uma para validar a entrada de dados no input "email" e outra para validar a entrada em "password".

// Em cada posição do array, usaremos a função check, passando como parâmetro o input a ser validado e concatenamos à execução desta função uma segunda função, que será a regra que queremos que nosso input atenda, por exemplo, isEmail.


const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const { check, validationResult, body } = require('express-validator');

router.post('/cadastro', [
    check('email').isEmail(),
    check('password').isLength({min: 6}),
],  UsuarioController.registro);


// ### **Site em manutenção**

// Aproveitando a capacidade dos middleware, vamos criar um código que podemos informar se o site esta em manutenção e mostra uma view personalizada informando o usuário, independente da rota que ele esteja acessando.

// Neste exemplo temos criada uma variável chamada "emManutencao" configurada por padrão com o valor false.

// Nós vamos ter que, usando o método use de app, criar uma função que avalia o valor da variável **"emManutencao"**. Se a variável tiver o valor false devemos executar a função **next** do middleware para que o fluxo da aplicação continue normalmente. Mas se a variável tiver o valor true vamos devolver a view **'em-manutencao**', usando o objeto response para isso.


const express = require('express');
const app = express();
let emManutencao = true;

app.use((req, res, next) => {
	if (emManutencao) {
		return res.render('em-manutencao');
	}
	
	next();
});


// ### **Adicionando middleware à rota "upload-file"**


// Ao contrário do ***middleware de aplicação middlewares de rotas,*** os ***middlewares de rotas*** permite que você aplique o middleware em uma ou mais rotas selecionadas.
 
// Um exemplo disso é o **middleware multer** que é adicionado apenas às rotas responsáveis pelo upload de arquivos. (Lembre-se que multer é um pacote node que permite o upload de arquivos para o servidor).

// Para este exemplo já temos a configuração do multer pronto, mas precisamos adicionar o middleware no caminho "upload-file".

// Para isso, teremos que passar como *segundo parâmetro* o arquivo de rota de upload do middleware **upload.any()**.



const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
    }
});
    
const upload = multer({ storage: storage });

router.post('/upload-file', upload.any(), fileController.upload);


// # **Contabilizando Acessos**

// Vamos imaginar que temos um controller chamado "**estatisticasController**" que tem um método "***contarAcesso***". Este método recebe um *request* e adiciona, em nossa base de dados, um novo acesso à url do request.

// Gostaríamos de contar os acessos do nosso site, mas não de todas as urls. Por exemplo, não queremos contar as visitas à rotas acessadas por post e algumas rotas get, como login e painel de usuário.
// 

// Nosso objetivo será ***criar uma função*** chamada ***visitasMiddleware*** que ***recebe como parâmetros*** req, res e next. Dentro desta função vamos ***executar o método contarAcesso*** de estatisticasController, e vamos passar o objeto pedido como ***parâmetro para o método***: *estatisticasController.contarAcesso(req)*. No final da nossa função vamos executar o callback ***next()***.

// Por fim, vamos adicionar nossa função "*visitasMiddleware*" como o ***segundo parâmetro da rota*** '/home' que já está definida no código.


const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estatisticasController = require('../controllers/estatisticasController');

const visitasMiddleware = (req, res, next) => {
	estatisticasController.contarAcesso(req);

	next();
}
router.get('/home', visitasMiddleware, homeController.index);


// # **Redirecionando para Página Inicial**

// > Algumas ***rotas*** em nosso site foram ***descontinuadas*** e não temos mais conteúdo para exibir. Gostaríamos de garantir que quando um usuário tente entrar em qualquer uma dessas rotas, ele ***seja redirecionado para a página inicial***.
// > 

// Para isso vamos ***criar uma função*** chamada "*redirecionar*", que vai ser usada como middleware e deve receber três parâmetros: ***req, res e next***.

// Dentro da nossa função vamos ***chamar o método redirect*** do objeto ***response*** e vamos redirecioná-lo para a url **'/'**. Para este caso em particular, *não é necessário* chamarmos o ***callback next***, já que a idéia deste redirecionamento é cortar a execução dos possíveis middlewares subsequentes.

// Finalmente só temos que adicionar a função "*redirecionar*" como ***segundo parâmetro*** da rota **'/rota-em-desuso'**.


const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

const redirecionar =  (req, res, next) => {
	res.redirect('/');
}

router.get('/rota-em-desuso', redirecionar, OldController.index);


/*Validando campos de cadastro

 Nós já temos a nossa rota de registro. O que precisamos fazer agora é adicionar uma validação para que o campo de e-mail seja do tipo email e a senha tenha, pelo menos, 6 caracteres.
Para conseguir isso, vamos requerer o módulo de express-validator e, usando o destructuring, vamos inicializar três constantes: check, validationResult e body.(PS: Por limitações, é aconselhado que dê um alias para o método check, mudando o nome para checar).
Em nossa rota, adicionaremos como segundo parâmetro um array. Ele terá apenas duas posições, uma para validar a entrada de dados no input "email" e outra para validar a entrada em "password".
Em cada posição do array, usaremos a função check, passando como parâmetro o input a ser validado e concatenamos à execução desta função uma segunda função, que será a regra que queremos que nosso input atenda, por exemplo, isEmail.*/


const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const { check: checar, validationResult, body } = require('express-validator');

router.post('/cadastro', [
    checar('email').isEmail(),
    checar('password').isLength({min: 6}),
],  UsuarioController.registro);




// ## ****Express Validator avançado****

// ### exercício 1

// > Neste exercício, temos um controlador com um método de login. Devemos
// > 
// > 
// > *reformular este método **IF*** (condição) para verificar se há erros de validação. No caso de haver erros, devemos *redirecionar o usuário*
// >  à tela de login *com os erros encontrados*
// > 

// Para fazer isso, precisaremos criar uma constante chamada ***erros*** e vamos atribuí-la à execução da função de ***validationResult***.

// Então em um ***IF*** chamaremos o ***método isEmpty*** do *objeto erros*.

// Caso o método retorne **false** (saberemos que *não está vazio* porque contém erros), devemos *retornar a visualização* de login com os erros.

// Para retornar a visualização de login você deve usar o **método render** do ***objeto response***. Lembre-se que para recuperar os erros você deve usar o ***método array*** do *objeto erros*.


const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');

const userController = {
  login: (req, res) => {
      
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
    	res.render('login', {erros: erros.array()});
    }

    if (req.body.name == 'admin' && req.body.pass == 123) {
    	res.redirect('/dashboard');
    }
  }  
}


// # SESSIONS E COOKIES

// ## SESSION

// ### exercício 1 - **Configurando Session**

// Uma pessoa desenvolvedora recebeu uma tarefa pra resolver: os usuários do site precisam fazer login a cada página que querem entrar. Essa pessoa lembrou do conceito de sessão dentro do Express e precisa fazer a implementação, mas está em dúvida e precisa da sua ajuda.

// Sua tarefa nesse exercício é:

// - importar o pacote que trabalha com sessão ("**express-session**") e guardar a importação em uma **constante** chamada **session**.
// - usar o pacote como um middleware global, através do app.use.
// - configurar o uso do pacote, inicializando por meio do session({secret: "frase secreta"}).


const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));


// ### exercício 2 - **Trocando o idioma**

// A rede social MyPhotos, especializada em publicação de fotos pelos usuários, está expandindo sua atuação para outros países e precisa ter um jeito de salvar o idioma favorito do usuário.

// Anteriormente, o idioma já podia ser alterado, mas não ficava salvo na sessão. Essa mudança de idioma é capturada pelo servidor através da URL, via **query string**, com o parâmetro **idioma** (lembra do query string? É a informação que vem na URL, usando o ponto de interrogação). A ideia é que, quando o usuário pedir para alterar o idioma, essa informação fique salva, sendo que ela chega por meio de uma rota do tipo get.

// Para concluir essa tarefa, você deve:

// recuperar o idioma, enviado via query string

// salvar esse idioma no objeto de sessão, que fica dentro do objeto de requisição


const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({ secret: "frase secreta" }));

const alterarIdioma = (req, res) => {
	const { idioma } = req.query;
	req.session.idioma = idioma;

	res.redirect('/');
}


// ### exercício 3 - **Validando usuários**

// > Neste exercício, temos um controller e precisaremos validar se *uma variável é definida na sessão.* . Se esta variável não for encontrada, *redirecione para a página de login*
// > 

// Para fazermos isto, precisamos criar um ***IF*** (condição) para verificar se o ***atributo admin*** existe ou não *dentro da sessão*
// . Se o atributo admin não estiver configurado redirecione o usuário para a rota "/login"*.*


const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const admin = (req, res) => {
	if (req.session.admin) {
		
	} else {
		res.redirect('/login');
	}
}


// ## cookies

// ### exercício 1 - **Configurando cookie**

// Os cookies são super fáceis de usar. Para praticarmos, neste exercício precisamos salvarem um cookie o atributo "***ultimoAcesso***" com o valor da *data atual*.

// O propósito disso é saber, quando o usuário acessar no nosso site novamente, quanto tempo se passou desde a última visita.

// Para isso, dentro do controller vamos usar o ***método cookie*** do objeto ***response***. Este método espera como primeiro parâmetro o nome do cookie, neste caso "***ultimoAcesso***". O segundo parâmetro será a data de acesso, isto podemos obter aplicando ***new Date()***.


var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	return res.cookie('ultimoAcesso', new Date());
}


// ### exercício 2 -**Preferências do Usuário**

// > Neste exercício, nosso site pode ser exibido em diferentes estilos css. O estilo padrão é mostrado na tela como "***default***", mas damos a possibilidade ao usuário de alterá-lo. Não apenas alterá-lo, como também guardamos a escolha deles em um ***cookie*** chamado ***estilo***.
// > 

// No controller do projeto vamos *reenderizar uma visualização*. Nosso objetivo é descobrir se há algum atributo estilo dentro do ***objeto cookie***. Se houver, vamos passar para a visualização o estilo já salvo, se não, passamos o "***default***".

// Para conseguir isso, utilize um condicional ***IF*** para verificar se existe um atributo de estilo dentro do cookie. Se sim, dentro do atributo ***if*** definimos uma variável chamada estilo com o valor *armazenado no cookie*. Caso contrário, em ***ELSE***, defina a variável estilo com o valor "***default***".


var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	let estilo;

	if (req.cookies.estilo) {
		estilo = req.cookies.estilo
	} else {
		estilo = 'default';
	}

	res.render('/', {estilo: estilo});
}


// ### exercício 3 -**Produtos recomendados**

// > Anteriormente no sistema contido deste exercício, era armazenado no navegador do usuário um ***cookie*** chamado "***preferências***". Agora, a partir do controller, queremos mostrar uma *lista de produtos recomendados* de acordo com as *preferências do usuário*.
// > 

// Para atingir este objetivo, vamos recuperar o valor do ***cookie*** "***preferências***" e armazená-lo numa ***constante*** chamada também de "***preferências***".

// A partir do valor recuperado traremos todos os produtos de ***listaDeProdutos*** cuja ***key*** corresponde a este valor. Nós armazenamos os produtos em uma **constante** chamada "***produtos***".

// E por fim, passamos ao método render a ***constante produtos,*** chamando a view ***"recomendados".***


var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listaDeProdutos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	camisetas: [
		"camisa de retalhos",
		"camisa bordada",
	]
}

const recomendados = (req, res) => {
	const preferencias = req.cookies.preferencias;

	const produtos = listaDeProdutos[preferencias];

	res.render('recomendados', {produtos: produtos})
}


// ## HASHING

// ### exercício 1 - **Testando o hash**

// Vamos experimentar o funcionamento do módulo hash. A ideia é, dado uma constante que tenha como valor uma senha, aplicar o método hashSync para a encriptar.

// Primeiro você deve declarar a constante bcrypt e iniciá-la com o require do módulo bcrypt.

// Criar uma nova constante chamada hash e atribuir o resultado da aplicação do método hashSync a senha.

// Por fim, devemos fazer um console.log para mostrar o valor da constante hash.


const password = '123456';
const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync(password, 10);
console.log(hash);


// ### exercício 2 - ****Validando informação "hasheada"****

// A idéia de usar o hash é salvar informações confidenciais sem revelar seu conteúdo original. Mas o que acontece quando precisamos recuperar essas informações para, por exemplo, validar o login de um usuário?

// Neste exemplo, já temos uma sequência de texto criptografada anteriormente, que armazenamos na constante hash1. Nosso objetivo é usar o método de comparação de hashes do bcrypt, onde passando o texto puro e o hash a ser comparado, sendo que o resultado do método deve ser guardado em uma constante chamada comparaHash.

// Dentro do if, execute um console.log que diga 'os hashes são iguais'.


const bcrypt = require('bcrypt');
const hash1 = bcrypt.hashSync('123456', 10);
const comparaHash = bcrypt.compareSync('123456', hash1)

if (comparaHash) {
    console.log('Os hashes são iguais');
}


// ### exercício 3 - ****Utilizando o método compareSync****

// Neste exemplo, temos definida a constante hash. Ela guarda dentro dela o valor "123456" criptografado.

// Nosso objetivo é verificar se "123456" corresponde ao valor do hash. Para isso, devemos usar o método compareSync do módulo bcrypt e comparar o resultado dentro de um if. Finalmente, dentro do if vamos executar um console.log que diz 'a senha está correta'.


const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('123456', 10);
const password = "123456";

if (bcrypt.compareSync("123456", hash)) {
	console.log('el password es correcto');
}
