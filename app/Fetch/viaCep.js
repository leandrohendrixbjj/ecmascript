// Impressão dos dados do retorno da api
console.clear()

const fetch = require('node-fetch')

async function showAdress (cep) {
  try {
    return await fetch(cep)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

showAdress('https://viacep.com.br/ws/01001000/json/')
  .then(data => data.json())
  .then(adress => console.log(adress))
  .catch(error => console.log(error))
