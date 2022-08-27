function wait500() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Wait500');
      },500);
    });
  }
  
  function wait200() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Wait200');
      },200);
    });
  }
  
  //Retorna a  promises que será executada primeiro, não depende da ordem de chamada
  //Mesma regra em caso de erro
  Promise.race([
     wait500(),
     wait200(),   
  ]).then( (ArrPromises) => {
     console.log(ArrPromises);
  });