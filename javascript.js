console.log("Hello World!");

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (event) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})



