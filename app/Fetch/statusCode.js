const fetch = require('node-fetch');

async function request() {
   let url = "https://www.totvs.com.br";

   try {
      return await fetch(url)
   } catch (error) {
      console.log(`Error: ${error}`);
   }
}

request()
   .then(response => console.log(response.status))
   .catch(err => console.log(`Error:${error}`));