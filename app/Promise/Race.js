console.clear();
// Retornar a mais rápida, mesmo que nas promisses invocadas
// Tenhamos uma que retorno error
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'p1')
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'p2')
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'p3')
});
Promise.race([p1, p2, p3])
  .then(res => console.log(res))
  .catch(error => console.log(error));
