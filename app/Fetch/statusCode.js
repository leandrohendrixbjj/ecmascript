// Impressão do status code, da chamada feita no request
console.clear()

const fetch = require('node-fetch')

async function request (endPoint) {
  try {
    return await fetch(endPoint)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

request('https://www.totvs.com.br')
  .then(data => console.log(data.status))
  .catch(error => console.log(`Error:${error}`))
