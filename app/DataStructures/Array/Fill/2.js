console.clear();

// O método fill() preenche todos os valores do array a partir do índice inicial 
// a um índice final com um valor estático.
const valor = 4;
const inicio = 1;

let arr = [1, 2, 3].fill(valor, inicio);

console.log(arr); // [1,4,4]
