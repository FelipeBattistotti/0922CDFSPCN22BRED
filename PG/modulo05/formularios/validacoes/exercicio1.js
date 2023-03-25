window.addEventListener('load', () => {
  const formulario = document.getElementById('formulario')
  const emailInput = document.getElementById('email')
  const senhaInput = document.getElementById('password')
  const msgSucesso = document.getElementById('msg-sucesso')

  formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    if (emailInput.value.length > 0 && senhaInput.value.length > 0) {
        msgSucesso.style.display = 'block'
    }
  })
})