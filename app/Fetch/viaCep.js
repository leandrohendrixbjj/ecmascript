const fetch = require('node-fetch');

async function requestUrl(){
   let url = `https://viacep.com.br/ws/01001000/json/`;
   try{
      return await fetch(url);      
   }catch(error){
      console.log(`Error: ${error}`);
   }
}

requestUrl().then((res) => {
   res.json().then((adress) => {
      console.log(adress);
   }).catch(error => console.log(`Error:${error}`));
}).catch(error => console.log(`Error:${error}`));
