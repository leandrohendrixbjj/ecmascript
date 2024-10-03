console.clear()

/*
   Retornar a mais rápida, mesmo que nas promisses invocadas
   Tenhamos uma que retorno error
*/

const store = new Promise((resolve) => {
  setTimeout(resolve, 500, 'Store')
})

const edit = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'Edit')
})

const remove = new Promise((resolve) => {
  setTimeout(resolve, 100, 'Remove')
})
Promise.race([store, edit, remove])
  .then(res => console.log(res))
  .catch(error => console.log(error))
