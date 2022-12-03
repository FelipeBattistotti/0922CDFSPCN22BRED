
// Callbacks 
// Exercício 1

function dobro(numero){
  return numero * 2
}

function triplo(numero){
  return numero * 3
}

function aplicar(numero, callback){
  return callback(numero)
}
 //_____________________________________________________
//Exercício 2 
const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2
            
const calculadora = (num1, num2, callback) => callback(num1, num2)

 //_____________________________________________________
// exercício 3

    // opção usando o for in

function adicionarHttp(url) {
  return  "http://" + url
}

function processar (array, func) {
  const resultado = [];

  for(const i in array) {
      resultado.push(func(array[i]));
  }
  return resultado;
}


      // ou também pode usar o .map

function adicionarHttp(url) {
  return  "http://" + url
}

function processar (array, func) {
  const arrayCompleto = array.map(elem => func(elem))

  return arrayCompleto;
}
 //_____________________________________________________

// Métodos de Array II
//Exercício 1
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

const maiores = numeros.filter(elem => elem > 18)

 //_____________________________________________________
//Ciclos II (for in / for of)
// Exercício 1
let bart = {
  mae: "Marge",
  pai: "Homer",
  hobbie: "Skate",
  corCamiseta: "Laranja"
}

for(let prop in bart){
  // console.log(prop)
  console.log(prop , bart[prop])
}
 //_____________________________________________________
// Exercício2
let frase = "Essa semana vou no colearning";

for(prop of frase){
    console.log(prop)
}


 //_____________________________________________________
//Objeto date
//Exercício 1

let data = new Date()

data.setFullYear(2022)
data.setMonth(12)
data.setDate(02)

 //_____________________________________________________

//Desestructuring
//Exercício 1
let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ ,bariloche, ,china, ] = destinosIncriveis


