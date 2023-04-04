console.clear();

// O método fill() preenche todos os valores do array a partir do índice inicial 
// a um índice final com um valor estático.

const valor = 4;
const inicio = NaN;
const fim = NaN;

let arr = [1, 2, 3].fill(valor, inicio, fim);

console.log(arr); // [1,2,3]
