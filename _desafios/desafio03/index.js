// original
// const somaNumeros = (numero1, numero2) => {
//   return numero1 + numero2
// }

const somaNumeros = (...numeros) => {
  return numeros.reduce((acc, curr) => acc + curr)
}

console.log(somaNumeros(1, 2, 5, 10))