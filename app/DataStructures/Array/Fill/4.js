console.clear();

// O método fill() preenche todos os valores do array a partir do índice inicial 
// a um índice final com um valor estático.
// Se o ínicio for negativo, ele será tratado como tamanho + ínicio onde tamanho 
//é o tamanho total do array. Se o fim for negativo, ele será tratado como tamanho + fim.
const valor = 4;
const inicio = -3; // total_array = 3 + (-3) = 0
const fim = -2; // total_array = 3 + (-2) = 1

let arr = [1, 2, 3].fill(valor, inicio, fim);

console.log(arr); // [4,3,3]
