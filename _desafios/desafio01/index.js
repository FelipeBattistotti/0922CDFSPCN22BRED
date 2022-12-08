const employees = require('./employees')

// console.log(employees)

// Filtra funcionários
const filterEmployees = (employee) => {
  return employee.department === 'Financeiro'
}

// Adiciona aumento
const addIncrease = (item) => {
  return item.salary = item.salary * 1.5
}

// Soma salários
const sum = (total, currentValue) => {
  return total + currentValue
}

// tradicional
const total = employees
    .filter(filterEmployees)
    .map(addIncrease)
    .reduce(sum)

// forma reduzida
// const total = employees
//     .filter(employee => (employee.department === 'Financeiro'))
//     .map(item => item.salary *= 1.5)
//     .reduce((total, currentValue) => total + currentValue)

console.log('total: ', total)