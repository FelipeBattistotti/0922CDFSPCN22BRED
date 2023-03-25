window.addEventListener('load', () => {
  const nameInput = document.getElementById("name")
  
  nameInput.addEventListener('blur', () => {
      if (nameInput.value == "") {
          nameInput.style.border = "2px solid red"
      } else {
          nameInput.style.border = "1px solid black"
      }
  })
})