// # Sequelize

// ## Usando Promisses

// ### exercício 1

// Existe uma promise chamada calculoComplexo, que foi criada para realizar alguns cálculos relacionados ao sistema que a sua equipe está trabalhando.

// Esta promise é um pouco diferente, só vai ser resolvida quando o then for chamado. Isso quer dizer que, diferente das promises tradicionais, ela já foi executada e está armazenada na constante calculoComplexo. Sua tarefa é anexar o then à essa constante e depois, passar o callbac

 
calculoComplexo
.then(res=>console.log(res))
  

// ## Modelos

// ### exercício 1

// Nossa base de dados possui uma tabela chamada **usuarios** que possui três colunas: nome, email e senha (todas do tipo string).

// O objetivo deste exercício é ser capaz de criar um model associado à tabela de usuários.

// Para criar nosso model vamos utilizar o método definir do objeto sequelize. Este método espera dois parâmetros: o primeiro é o nome da tabela e o segundo um JSON, cujas chaves são os nomes das colunas e os valores o tipo de dados.

 
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define(
'usuarios', {
	nome: Sequelize.STRING,
	email: Sequelize.STRING,
	senha: Sequelize.STRING,
}
);

module.exports = Usuario;
  

// ### exercício 2

// Ao configurar nossos modelos Sequelize você faz algumas suposições sobre nossas tabelas. Uma delas é que espera que todas as nossas tabelas tenham as colunas criadas e atualizadas.

// Se você criar um model de tabela que não tenha nenhuma destas colunas você pode obter o erro clássico "Unknown column 'createdAt' in 'field list'".

// Para evitar isso, devemos dizer explicitamente ao Sequelize que não vamos usar nenhuma das colunas criadas ou atualizadas. Para isso, precisamos passar como terceiro parâmetro do método definir um JSON com esta estrutura: {timestamps: false}.

// Neste exemplo já temos o model configurado para a tabela de usuários, mas precisamos ter certeza de que não temos as colunas created_at ou updated_at. O seu objetivo será adicionar a configuração correspondente.

 
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
}, {
	timestamps: false
});

module.exports = Usuario;
  

// ## FUNÇÕES DE BUSCA

// ### exercício 1

// > A partir do nosso model Filmes vamos recuperar todos os filmes da nossa base de dados e fazer um console.log do resultado.
// > 

// Para isso você pode usar o método **findAll** do ***model Filmes***.******* Lembre-se que este método é assíncrono.

 
const Filmes = require('model/filmes.js');

Filmes.findAll().then(filmes => {
	console.log(filmes)
});
  

// ### exercício 2

// A partir do model Filmes vamos recuperar o filme com a id 1.

// O Sequelize nos oferece o ***método findByPk*** que recupera um elemento da base de acordo com sua chave primária.

//  Podemos usar este método a partir do nosso objeto Filmes.

// Tenha em mente que este método é assíncrono, portanto será necessário trabalhar com promises.

 
const Filmes = require('model/filmes.js');

Filmes.findByPk(1).then(filme => {
	console.log(filme)
});
  

// ## where e operadores

// ### exercício 1

// > O método **findAll nos traz todas as linhas de registros que temos em nossa base. Se precisarmos filtrar o resultado, podemos passar um JSON como parâmetro do métodos com uma query dentro.**
// > 

// Neste exercício, temos o ***model Auto***. Nosso objetivo será trazer todos os carros cujas coluna de marcas correspondam ao valor "Fiat".

 
const Auto = require('model/autos.js');

Auto.findAll({
	where: {
		marca: 'Fiat'
	}
}).then(autos => {
	console.log(autos)
});
  

// ### exercício 2

// > Neste exercício, vamos buscar todos os usuários que possuem uma conta Gmail
// . Para fazer isso, vamos precisar perguntar dentro do findAll se os valores contidos coluna email terminam com a string de texto "@gmail.com".
// > 

// > Até agora o where esperava um JSON cuja chave era a coluna a ser pesquisada e valor era o que queríamos pesquisar. Isto nos trouxe combinações idênticas, é como usar o mesmo operador do MySQL. Mas agora vamos precisar usar um operador similar, ou seja, vamos ter que recriar com sequelizar esta consulta MySQL: 'SELECT * FROM users WHERE email LIKE "%gmail"''.
// > 

// Para isso, dentro do where onde vamos passar um JSON com o nome da coluna e cujo valor é um novo JSON: **{ [Op.like]: '%gmail.com'}**

 
const Sequelize = require('sequelize');
const Usuario = require('model/usuarios.js');
const Op = Sequelize.Op;

Usuario.findAll({
	where: {
		email: { [Op.like]: '%gmail.com'}
	}
}).then(usuarios => {
	console.log(usuarios)
});
  

// ## Order e limit

// ### exercício 1

// Neste exercício o objetivo será trazer todos os produtos ordenados por preço, do **menor** para o **maior**.

// Lembre-se que dentro do ***método findAll*** você pode passar um JSON que tenha como chave a palavra ***order*** e cujo valor é um array de array indicando em qual coluna ou colunas iremos ordenar e qual tipo de ordenação  terá: ***ASC***  ou ***DESC***.

 
const Produto = require('model/produtos.js');

Produto.findAll({
	order:[['preco','ASC']],
}).then(produtos => {
	console.log(produtos)
});
  

// ### exercício 2

// Quando devolvemos ao usuário uma lista de registros é aconselhável que os resultados sejam paginados , para trazer tanta informação junta da base de dados.

// Neste exercício, temos a função ***findAll*** aplicado ao ***model Produto*** .

// O objetivo da vez é passar um parâmetro para o ***método findAll*** 
// para executar um ***limit***  e trazer apenas os 5 primeiros produtos.

 
const Produto = require('model/produtos.js');

Produto.findAll({
	limit: 5
}).then(produtos => {
	console.log(produtos)
});
  

// ## Sequelize - Manipulação de dados

// ## Create

// ### exercício 1

// Suponha que tenhamos um model de Sequelize chamado **Usuário**. Este modelo possui três atributos: nome, email, senha, todos eles do tipo **string**.

// O que devemos fazer é, a partir desse modelo, inserir um usuário no banco de dados indicando um valor para cada atributo.

// Para resolver isso, lembre-se de que você deve usar o método **create** do seu modelo.

 
const Usuario = require('model/usuario.js');

Usuario.create({
    nome: 'Hendy',
    email: 'hendy@mail.com',
    senha: '123'
})
  

// ### exercício 2

// Em certas situações, precisamos fazer mais de um registro no banco de dados. Embora possamos usar o método **create** várias vezes, a sequenciação facilita essa tarefa com o método **bulkCreate**. Este método recebe um array, em que cada posição é um objeto com as mesmas características do objeto que o método create recebe. Em outras palavras, o método **bulkCreate** é como o método create, mas com a vantagem de permitir a inserção de vários registros ao mesmo tempo.

// Neste exemplo, temos o model de filme. Nosso objetivo é inserir dois filmes usando o método **bulkCreate**. Cada filme a ser inserido deve ter um título e um gênero (para os nomes dos atributos, use "titulo" e "genero" sem acentos).

 
const Filme = require('model/filme.js');

Filme.bulkCreate([{
    titulo: '1984',
    genero: 'wtf'
},{
    titulo: '1984',
    genero: 'wtf'
}])
  

// ### exercício 3

// Neste exemplo, temos o controller produtoController que possui o método create. Ao mesmo tempo, existe um formulário com os campos nome e preço e que envia esses dados para o nosso controlador, através de uma solicitação do tipo POST.

// A ideia do exercício é poder recuperar os dois campos e usar o model do produto e inseri-los em nosso banco de dados.

// Para isso, será necessário usar o método create do modelo do produto. Como parâmetro do método, devemos passar um JSON com os atributos nome e preco (sem acentos). Teremos que recuperar os valores para esses atributos a partir da requisição.

//  
const Produto = require('model/produto.js');

const produtoController = {
  create: (req, res) => {
    Produto.create({
    	nome: req.body.nome,
    	preco: req.body.preco,
    })
  }  
}
  

// ## Update

// ### exercício 1

// Em nossa base temos um produto chamado "**Smartphone x5 MEGA PRO".**  O id dele é 1.  Nosso objetivo aqui é atualizar seu **preço**  para o valor de 899 devido a uma promoção.

// Para esse desafio iremos usar um modelo  **já definido**  chamado Produto. Como vimos, o método update altera os dados em uma tabela. Este método, recebe como parâmetro dois objetos: o primeiro contendo as informações que iremos atualizar. O segundo com as condições para selecionarmos qual registro queremos alterar.

 
const Produto = require('model/Produto.js');

Produto.update({
	preco: 899,
}, {
	where: {
		id: 1
	}
});
  

// ### exercício 2

// Em determinadas circunstâncias podemos usar o método update para atualizar mais de um registro em nossa base de dados. Nesse próximo desafio queremos mudar os valores da coluna **genero**  de todas as **séries** cujo o gênero seja **comédia** para **sitcom**.

// A ideia por aqui é semelhante do nosso primeiro desafio, porém dessa vez, no nosso objeto de configuração ou query, devemos fazer um where pela coluna **genero** (sem acento!).

 
const Serie = require('model/Serie.js');

Serie.update(
	{
		genero: "sitcom"
	}, 
	{
		where: {
			genero: "comédia"
		}
	}
);
  

// ## Destroy-soft deletes

// ### exercício 1

// Da mesma maneira que inserimos e atualizamos dados em nosso banco de dados, o Sequelize também nos permite excluir registros. Para esta tarefa, o método destroy pode ser utilizado em qualquer um dos nossos modelos. Este método espera como parâmetro um objeto com uma query do tipo where que permita identificar a linha a ser excluída.

// O objetivo deste exercício é remover o filme com um ID igual a 3.

 
const Filme = require('model/filme.js');

Filme.destroy({where:{id:3}});
  

// ### exercício 2

// Da mesma maneira que um registro pode ser excluído por seu ID, o mesmo pode ser feito para alguma outra coluna que identifique exclusivamente o elemento.

// Neste exercício, excluiremos um usuário com base no seu email. O objetivo é eliminar o usuário cujo email é igual a "kenny@south-park.com"

// Para isso, usaremos o método destroy do model Usuario, passando como parâmetro uma consulta que faz um where pelo email.

 
const Usuario = require('model/usuario.js');

Usuario.destroy({
	where: {email: "kenny@south-park.com"}
});
  

// ### exercício 3

// O método destroy permite, como o select, passar outros operandos para a consulta. Em vez de usar uma comparação de operador igual (a comparação padrão), podemos usar um like.

// Neste exemplo, removeremos todos os usuários cujo provedor de email é aol.com. Ou seja, aqueles cujo email termina em  "aol.com".

// Para isso, vamos executar o método de destruição do model Usuario. Dentro do where (no método destroy), vamos passar um objeto com o nome da coluna e cujo valor é um novo JSON com a seguinte sintaxe: email: {[Op.like]: '%aol.com'}

 
const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({
	where: {
		email: { [Op.like]: '%aol.com'}
	}
});
  

// ## Sequelize - Relacionamentos e CRUD completo

// ## Relações 1:N

// ### exercício 1

// Vamos imaginar que já criamos um modelo para gênero e agora queremos criar um para um filme.

// O objetivo será indicar a relação entre um filme e um gênero no modelo "Filme". Ou seja, um filme pertence a um gênero.

// Para definir isso, após a declaração do model do filme, será necessário chamar o método belongsTo, passando o model "Genero" como o primeiro parâmetro. O segundo parâmetro do método belongsTo será um objeto com a configuração para o ForeignKey e o "as" (apelido para o nome da relação). No nosso caso, a ForeignKey será a coluna chamada "genero_id" e indicaremos como alias "genero".

 
module.exports = (sequelize, DataTypes) =>{
    const Filme = sequelize.define('filmes',{
        titulo: DataTypes.STRING,
        genero_id: DataTypes.INTEGER,
    });

    Filme.associate = (models) => {
        Filme.belongsTo(models.Genero, {
            foreignKey:'genero_id',
            as:'genero'
        })
    }
  
  //Seu código aqui!
   return Filme
}
  

// ### exercício 2

// Para este exercício, nosso objetivo será, após a definição do modelo Genero, vinculá-lo ao modelo Filme.

// Nesse caso, um gênero tem muitos (has many) filmes. Para indicar isso, vamos usar o método hasMany do modelo Genero.

// Para a configuração da relação, será utilizada a coluna "genero_id" como foreignKey. Indicaremos como apelido da relação (alias) "filmes".

 
module.exports = (sequelize, DataTypes) =>{
    const Genero = sequelize.define('generos',{
        nome: DataTypes.STRING,
    });

    Genero.associate = (models)=>{
        Genero.hasMany(models.Filme, {
            foreignKey:'genero_id',
            as:'filmes'
        })
    }
  
  //Seu código aqui!
   return Genero
}
  

// ### exercício 3

// Nesse exemplo teremos um modelo Filme que tem já definida uma relação com o modelo gênero.

// Queremos buscar o filme com id 1, e para isso podemos usar o método **findByPk**. É importante dizer que também queremos trazer o gênero do filme em nossos resultados.

// Para conseguir isso, devemos passar como segundo parâmetro do método **findByPk** um objeto com o atributo include. O atributo include será um array com a lista de todos os relacionamentos que queremos trazer associados ao filme, no nosso caso, apenas o relacionamento **genero**.

// E para nosso desafio se concluir, você deverá dar um console.log no atributo que contem o nome do gênero: **filme.genero.nome**

 
const Filme = require('model/Filme.js');

Filme.findByPk(1, {
	include: ['genero']
}).then(filme => {
	console.log(filme.genero.nome)
});
  

// ## Relações N:M

// ### exercício 1

// No MySQL, ao indicar **relacionamentos muitos para muitos**, é necessário criar uma tabela dinâmica. Algo semelhante acontece com Sequelize. Para relacionar dois models por meio da relação **belongsToMany**, devemos primeiro criar um model "dinâmico".

// Neste exemplo, queremos relacionar os models de filme e ator. Para isso, vamos criar o modelo FilmeAtor. Como na criação de qualquer model, o primeiro parâmetro é o nome da tabela, neste caso: "filme_ator". Como segundo parâmetro, passamos a JSON as colunas e suas propriedades. Sendo a representação de uma tabela dinâmica, ela terá duas colunas "filme_id" e "ator_id".

// Além de indicar que cada uma dessas colunas é um número inteiro, devemos definir o parâmetro **references** indicando os atributos do model e key. O model será com qual model está relacionado e a chave para qual coluna ele aponta.

// Para a coluna filme_id, o model será "Filme" e a key "id". Enquanto para a coluna ator_id, o model será "Ator" e a key "id".

// Mãos à obra.

 
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const FilmeAtor = sequelize.define('filme_ator',{
    filme_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Filme',
    		key: 'id'
    	}
    },
    ator_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Ator',
    		key: 'id'
    	}
    }
});

module.exports = FilmeAtor;
  

// ### exercício 2

// Depois de criar o model dinâmico, devemos estabelecer um relacionamento do tipo belongsTo com cada um dos modelos relacionados.

// Em nosso exemplo, precisaríamos adicionar um belongsTo com Filme e outro com Ator. Como em todos os belongsTo, o primeiro parâmetro será o nome do model e o segundo um JSON indicando a ForeignKey (não é necessário definir "as").

 
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Ator = require('model/ator.js');
const Filme = require('model/filme.js');

const FilmeAtor = sequelize.define('filme_ator',{
    filme_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Filme',
    		key: 'id'
    	}
    },
    ator_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Ator',
    		key: 'id'
    	}
    }
});

FilmeAtor.belongsTo(Filme, {foreignKey: 'filme_id'});
FilmeAtor.belongsTo(Ator, {foreignKey: 'ator_id'});

module.exports = FilmeAtor;
  

// ### exercício 3

// O objetivo deste exercício é relacionar o modelo do filme e ator através de um relacionamento muitos-para-muitos (N-M).

// Para indicar isso, vamos usar o método **belongsToMany** no modelo Filme. Não se esqueça que devemos executar esse método dentro da função associate.

// Para a configuração da relação, a **ForeignKey** será a coluna **filme_id**, com alias "*atores*" e a tabela intermediaria será o modelo **FilmeAtor**.

 
module.exports = (sequelize, DataTypes) =>{
    const Filme = sequelize.define('filmes',{
        titulo: DataTypes.STRING,
        genero_id: DataTypes.INTEGER,
    });
    Filme.associate = function(models){
            Filme.belongsToMany(models.Ator, {
            through: 'FilmeAtor',
            foreignKey: 'filme_id',
            as: 'atores'
        });
    }

return Filme

}
  

// ### exercício 4

// Neste exemplo, temos o modelo de filme que tem um relacionamento muitos-para-muitos com o ator.

// Queremos trazer todas as informações do filme com id junto com os atores que ele associou.

// Para conseguir isso, devemos passar como segundo parâmetro do método **findByPk** um JSON com o atributo **include**. O atributo include será um array com a lista de todos os relacionamentos que queremos trazer associados ao filme, no nosso caso, apenas o relacionamento "atores".

// Finalmente, imprimiremos dentro do método e, em seguida, um console.log que nos mostra os atores do filme: filme.atores.

// Como o relacionamento é de muitos para muitos, o atributo de atores será do tipo de array.

 
const Filme = require('model/filme.js');

Filme.findByPk(1, {
	include: ['atores']
}).then(filme => {
	console.log(filme.atores)
});
  

// Ao criar o relacionamento do tipo **belongsToMany** entre a sequenciação Filme e Ator, fornecemos os métodos setAtores, que permitem vincular um filme a um ou mais atores.

// Neste exemplo, já temos uma instância de filme. O que faremos na instância do filme, execute o método setAtores, passando como parâmetro um array com os IDs dos atores que queremos vincular. Isso gerará automaticamente os registros na tabela dinâmica.

// Link atores 3, 5 e 8

 
const Filme = require('model/filme.js');

Filme.findByPk(1).then(filme => {
	filme.setAtores([3, 5, 8])
});
  