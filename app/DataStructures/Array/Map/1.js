console.clear();

// O método map() invoca a função callback passada por 
// argumento para cada elemento do Array e devolve um novo Array como resultado.
const arr = [1, 2];

const sum = arr.map(value => value + 1);

console.log(`Sum:${sum}`);