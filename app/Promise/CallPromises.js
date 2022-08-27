function jaRealizada() {
    return new Promise((resolve, reject) => {
       return resolve(true);
    });
  }
  
  function nome(){
    return console.log('Nome: Leandro');
  }
  
  function idade(){
    return console.log('Idade: 38');;
  }
  
  function cep(){
    return console.log('Cep: 0366401');;
  }
  
  jaRealizada()
  .then(nome)
  .then(idade)
  .then(cep)
  .catch((erro) => {
     console.log('Error', err);
  });