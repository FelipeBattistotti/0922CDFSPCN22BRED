// Exercício 1 -Criando Arrays

let listaDePares = [2, 4, 6, 8, 10]
let listaDeFilmes = ["A Sociedade do Anel", "As Duas Torres", "O Retorno do Rei"]


//_____________________________________________________

// Exercício 2 - Quantos Elementos TEm

function quantosElementos(array){
    return "Esse array tem " + array.length + " elementos"
}

//_____________________________________________________


// Exercício 3 - Agregando Sabor

  function agregandoSabor(array, novoItem){
    array.push(novoItem)
    return array
  }


//_____________________________________________________

// Exercício 4 - Lista de carros

var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"];

for(let i =0; i< listaDeCarros.length; i++){
    console.log("Nome do Carro: "+ listaDeCarros[i])
}

//_____________________________________________________


// Exercício 5 -  listar produtos

function listarProdutos(){
	var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']

  for(var i = 0; i < lista.length; i++){
  	console.log(lista[i])
  }
}

//_____________________________________________________


// Exercício 6 - Lista de Lucro

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;



for(let i=0; i < listaDeLucro.length; i++){

     lucroTotal += listaDeLucro[i]

    }


//_____________________________________________________


// Exercício 7 - Lista de ganhos

var listaDeGanhos = [10, 30, -10, -5, -1, 40];
var totalNegativos = 0;

for(let i=0; i < listaDeGanhos.length; i++){
    if(listaDeGanhos[i]<0){
     totalNegativos ++

    }
}

//_____________________________________________________

// Exercício 8 - Busca

 var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
var busca = "Cajá";

for(let i = 0; i < listaDeFrutas.length; i++) {
  if(listaDeFrutas[i] == busca) {
    console.log("Sim, temos a fruta " + busca + " disponível")
  }
}
 
//_____________________________________________________


// Exercício 9 - Mover Item

function moverItem(arrayA, arrayB){
    let retiraUltimo = arrayA.pop()
    arrayB.push(retiraUltimo)
}

//_____________________________________________________


// Exercício 10 - Estava presente na aula

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
  return nomesDosPresentes.indexOf(nomeDoAluno) > -1
}

//_____________________________________________________


// Exercício 11 - Transformar para Maiusculo

function transformaParaMaiusculo(palavras){
  let resultado = []

  for (let i = 0; i < palavras.length; i++) {
      resultado.push(palavras[i].toUpperCase())
  }
  return resultado;
}