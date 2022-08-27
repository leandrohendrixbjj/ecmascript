function jaRealizada() {
    return new Promise((resolve, reject) => {
      return resolve(true);
    });
  }
  
  function nome(nome) {
    return new Promise((resolve, reject) => {
      if (nome == 'leandro') { resolve(true) }
      reject('Nome incorreto');
    });
  
  }
  
  jaRealizada()
  .then( (data) => {
    return nome('leandro0');
  }).then((result) => {
    console.log('Nome correto');
  }).catch((err) => {
    console.log('Error:', err);
  }).finally(() => {
    console.log('Finnaly: Sempre será impresso com ou sem erro');
  })
  