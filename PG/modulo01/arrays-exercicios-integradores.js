// Exercício 1 - ELEVADOR

for(var i = 0; i < moradores.length; i++){
  if(i % 2 == 0) {
      console.log('O morador ' + moradores[i] + ' pode usar o elevador')
  }
}

//_____________________________________________________

//Exercício 2 - Dados de um usuário

function maiorAlto(array){
  if(array[1] >= 18 && array[2] >= 170){
      return true
  } else {
      return false
  }
}

//_____________________________________________________
//Exercício 3 - Academia

var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []

for(var i = 0; i < alunos.length; i++){
  if(alunos[i] >= 150 && alunos[i] <= 159){
      grupoA.push(alunos[i])
  }
  if(alunos[i] >= 160 && alunos[i] <= 169){
      grupoB.push(alunos[i])
  }
  if(alunos[i] >= 170){
      grupoC.push(alunos[i])
  }
}

//_____________________________________________________
//Exercício 4 - Estacionamento

var placas = [
 'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
 'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',   
 'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
 'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
 'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
 'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
 'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
 'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
 'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
 'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
 'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
] 

function calcularNumeroDeEntradas(placa){
 var total = 0
 for(var i = 0; i < placas.length; i++){
    if(placas[i] == placa){
       total++
    }
 }
 return total
}
function calcularValorDevido(placa){
var total = calcularNumeroDeEntradas(placa)

if(total <= 20) {
  return total * 10
} else {
  return 200 + (total - 20) * 5
}
}

//_____________________________________________________
//Exercício 5 - Cinema

function calculaGostos(notas){
  var totalRuim = 0
  var totalMedio = 0
  var totalBom = 0

  for(var i = 0; i < notas.length; i++) {
      if(notas[i] == 0 || notas[i] == 1){
          totalRuim++
      }
      if(notas[i] == 2 || notas[i] == 3){
          totalMedio++
      }
      if(notas[i] == 4 || notas[i] == 5){
          totalBom++
      }
  }
  return [totalRuim, totalMedio, totalBom]
}

//_____________________________________________________
//Exercício 6 - Personagens

function filme(personagens, filmes, lancamentos, id){

if(id > 0 && id <= filmes.length){
  var pos = id - 1
    return personagens[pos] + " é um personagem do filme " + filmes[pos] + " que estreou no cinema em " + lancamentos[pos] + "."
} else {
  return "Essa não é uma opção válida."
}
}


//_____________________________________________________
//Exercício 7 - Comissão

function comissao(preco,porcentagem){
  return (preco * porcentagem)/100;
}


//_____________________________________________________
//Exercício 8 - Maior que o número

function maiorQueNum(array, num){
var maiores = []

for(var i = 0; i < array.length; i++){
  if(array[i] > num){
    maiores.push(array[i])
  }
}
return maiores
}

//_____________________________________________________
//Exercício 9 - Busca Divisível Por

function buscarDivisivelPor(array, num){
for(i = 0; i < array.length; i++){
  if(array[i] % num == 0 && array[i] != 0){
    return array[i]
  }
}
    return "Nenhum número válido encontrado!"
}

//_____________________________________________________
//Exercício 10 - Repetindo palavras

function repete(valor,qtd){
  for(var i = 0; i < qtd; i++){
   console.log(valor)
}
}

//_____________________________________________________
//Exercício 11 - Séries

function series(prefixo, array){
  var novoArray = []
  for(var i = 0; i <array.length; i++){
      novoArray.push(prefixo + " " + array[i])
  }
  return novoArray
}

//_____________________________________________________
//Exercício 12 - Somatórias de baixo valor

function somatoriaBaixoValor(array){
  let soma = 0;
  for( let i = 0 ; i < array.length ; i++){
    if(array[i] > 0 && array[i] <= 1000){
      soma = soma +array[i];
    }
  }
  return soma;
 }

//_____________________________________________________
//Exercício 13 - Entrada no cinema

function lugaresDisponiveis(array, num){
  for(var i = 0; i < array.length; i++){
      if(array[i] == num){
          return "Parabéns, o assento número " + num + " está disponível."
      }
  }
  return "Desculpe, o assento número " + num + " está ocupado, mas ainda há " + array.length + " assentos disponíveis."
}

//_____________________________________________________
//Exercício 14 - A chave secreta

function aChaveSecreta(array){
let fraseFinal = "";
for( let i = array.length-1 ; i >= 0 ; i-- ){
  if(array[i] != "*"){
    fraseFinal+= array[i]
  }
}
return fraseFinal
}

