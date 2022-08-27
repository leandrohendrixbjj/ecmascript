const fetch = require('node-fetch');

async function requestUrl(){
   let url = `https://www.totvs.com.br`;
   try{
      return await fetch(url);      
   }catch(error){
      console.log(`Error: ${error}`);
   }
}

requestUrl().then((res) => {
   console.log(res.status);
}).catch(error => console.log(`Error:${error}`));
