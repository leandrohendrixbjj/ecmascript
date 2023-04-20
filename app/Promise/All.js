console.clear();

//O then de Promise.all só será invocado quando todas as promisses estiverem concluídas
const store = Promise.resolve(201);
const update = Promise.reject("Id not avail");
const remove = Promise.resolve(204)

Promise.all([store, update, remove])
    .then(res => console.log(res))
    .catch(error => console.log(error));