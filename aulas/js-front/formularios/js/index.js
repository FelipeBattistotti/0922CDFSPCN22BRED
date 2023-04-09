const form = document.getElementById("form")
const username = document.getElementById("username")
const state = document.getElementById("state")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

console.log(localStorage.getItem('localStorage'))

// removeItem
// localStorage.removeItem('localStorage')

// clear - Remove todos os itens do Local Storage
localStorage.clear()

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
  .then(response => response.json())
  // .then(json => console.log(json))
  .then(json => {
    json.forEach(function(estado){
      const optionState = document.createElement('option')
      optionState.value = estado.sigla
      optionState.innerText = estado.nome
      state.append(optionState)
    })
  })

form.addEventListener("submit", (e) => {
  e.preventDefault()
  sessionStorage.setItem('sessionStorage', 'true')
  localStorage.setItem('localStorage', 'true')
  checkInputs()
})

// username.onfocus = () => {
//   console.log('onfocus()')
// }

username.onblur = () => {
  // console.log('onblur()')
  checkUsernameValue(username.value)
}

// username.onchange = () => {
//   console.log('onchange()')
// }

const checkUsernameValue = (value) => {
  if (value === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.")
  } else {
    setSuccessFor(username)
  }
}

function checkInputs() {
  const usernameValue = username.value
  const emailValue = email.value
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value

  let formIsValid = true

  if (usernameValue === "") {
    formIsValid = false
    setErrorFor(username, "O nome de usuário é obrigatório.")
  } else {
    setSuccessFor(username)
  }

  if (emailValue === "") {
    formIsValid = false
    setErrorFor(email, "O email é obrigatório.")
  } else if (!checkEmail(emailValue)) {
    formIsValid = false
    setErrorFor(email, "Por favor, insira um email válido.")
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === "") {
    formIsValid = false
    setErrorFor(password, "A senha é obrigatória.")
  } else if (passwordValue.length < 7) {
    formIsValid = false
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.")
  } else {
    setSuccessFor(password)
  }

  if (passwordConfirmationValue === "") {
    formIsValid = false
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.")
  } else if (passwordConfirmationValue !== passwordValue) {
    formIsValid = false
    setErrorFor(passwordConfirmation, "As senhas não conferem.")
  } else {
    setSuccessFor(passwordConfirmation)
  }

  if (formIsValid) {
    console.log("O formulário está 100% válido!")
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector("small")

  // Adiciona a mensagem de erro
  small.innerText = message

  // Adiciona a classe de erro
  formControl.className = "form-control error"
}

function setSuccessFor(input) {
  const formControl = input.parentElement

  // Adicionar a classe de sucesso
  formControl.className = "form-control success"
}

function checkEmail(email = '') {
  return email.includes('@')
}