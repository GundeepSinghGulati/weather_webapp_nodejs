const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorMessage = document.getElementById('error-message')
const infoMessage = document.getElementById('info-message')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    errorMessage.textContent = 'Loading...'
    infoMessage.textContent = ''
    fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errorMessage.textContent = data.error;
            }else {
                infoMessage.textContent = data.location
                errorMessage.textContent = data.forecast
            }
        })
    })
})