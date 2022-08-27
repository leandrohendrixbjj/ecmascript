function nome(nome){
    return new Promise((resolve,reject) => {
       if(nome != 'leandro') reject('Nome Incorreto');
       resolve('38');     
    });
 }
 
 nome('leandro')
 .then( (idade) => {
    console.log('Idade', idade);
 })
 .catch( (err) => {
   console.log('Error', err);
 });