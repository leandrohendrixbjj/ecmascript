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

function jaRealizada(){
  return new Promise((resolve,reject) => {
    resolve(true);
  });
}

//Retorna um array com as promises, respeitando a ordem de chamada
//O then de Promise.all só será invocado quando todas as promisses estiverem concluídas'
Promise.all([
   wait500(),
   wait200(),
   jaRealizada()
]).then( (ArrPromises) => {
   console.log(ArrPromises);
});