console.clear()

/* eslint-disable */
// Executa as Promise independe de erro
const store = Promise.resolve(201)
const update = Promise.reject('Id not avail')
const remove = Promise.resolve(204)

Promise.allSettled([store, update, remove])
    .then(res => console.log(res))
