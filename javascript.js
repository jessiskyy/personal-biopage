console.log("Hello World!");

const form = document.querySelector('#form')
const submitButton = form.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.href + '/success.html'
})



