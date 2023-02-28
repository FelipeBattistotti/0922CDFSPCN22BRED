const mouseOverButton = () => {
  console.log('MOUSE OVER BUTTON !')
}

window.onload = function() {
  // querySelector
  const button = document.querySelector('button')
  button.innerText = 'Cadastre-se'

  // 1
  // button.onmouseover = mouseOverButton

  // 2
  // button.onmouseover = () => {
  //   console.log('MOUSE OVER BUTTON !!!')
  // }

  // 3
  button.addEventListener('mouseover', function() {
    button.style.cursor = 'pointer'
    button.style.backgroundColor = '#0077c4'
  })
  button.addEventListener('mouseout', function() {
    button.style.cursor = 'auto'
    button.style.backgroundColor = '#0095f6'
  })



  // getElementsByTagName
  // const button = document.getElementsByTagName('button')
  // button[0].innerText = 'Cadastre-se'

  // querySelector
  // const userName = document.querySelector('.avatar-content div')
  // userName.innerHTML = '<strong>Nome Usuário</strong>'

  // querySelector
  const userName = document.querySelector('.avatar-content p')
  userName.innerHTML = '<strong>Logado</strong>'

  // querySelector
  // const button = document.querySelector('div .button')
  // button.innerText = 'Por favor cadastre-se'

  // getElementById
  const connect = document.getElementById('connect')
  connect.innerText += ' aqui'

  // querySelectorAll
  const inputs = document.querySelectorAll('.input')
  inputs.forEach(element => {
    // style
    element.style.borderRadius = '4px'
    // classList
    element.classList.add('active')
  })

  // querySelector
  const register = document.querySelector('.register')
  if (register.classList.contains('register'))
      register.classList.remove('register')
}

// window.addEventListener('load', () => {

//   // querySelector
//   // const button = document.querySelector('button')
//   // button.innerText = 'Cadastre-se'

//   // getElementsByTagName
//   // const button = document.getElementsByTagName('button')
//   // button[0].innerText = 'Cadastre-se'

//   // querySelector
//   // const userName = document.querySelector('.avatar-content div')
//   // userName.innerHTML = '<strong>Nome Usuário</strong>'

//   // querySelector
//   const userName = document.querySelector('.avatar-content p')
//   userName.innerHTML = '<strong>Logado</strong>'

//   // querySelector
//   const button = document.querySelector('div .button')
//   button.innerText = 'Por favor cadastre-se'

//   // getElementById
//   const connect = document.getElementById('connect')
//   connect.innerText += ' aqui'

//   // querySelectorAll
//   const inputs = document.querySelectorAll('.input')
//   inputs.forEach(element => {
//     // style
//     element.style.borderRadius = '4px'
//     // classList
//     element.classList.add('active')
//   })

//   // querySelector
//   const register = document.querySelector('.register')
//   if (register.classList.contains('register'))
//       register.classList.remove('register')

// })
