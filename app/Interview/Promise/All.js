console.clear()

/*
   Promise.all: resolve quando todas as promises no argumento iterável forem resolvidas.
   Tem um retorno positivo, apenas se todas as promisses forem executadas com sucesso
*/

/* eslint-disable */
const store = Promise.resolve(true)
const remove = Promise.resolve(true)
const update = Promise.reject('Update fail')

Promise.all([store, update, remove])
  .then(res => console.log(res))
  .catch(error => console.log(error))
