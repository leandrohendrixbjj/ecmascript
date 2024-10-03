console.clear()

/*
   Promise.allSettled: retorna uma promessa que é resolvida após todas as promessas dadas
   serem resolvidas ou rejeitadas
*/

/* eslint-disable */
const store = Promise.resolve(201)
const update = Promise.reject('Id not avail')
const remove = Promise.resolve(204)

Promise.allSettled([store, update, remove])
    .then(res => console.log(res))
