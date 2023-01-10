console.clear();

let target = 0; // Posição para a qual os elementos serão copiados.
let start = 3; // Índice inicial de onde se copiará os elementos.
let end = 4; // Índice final de onde se copiará os elementos.

let arr = [1, 2, 3, 4, 5].copyWithin(target, start, end)

console.log(arr);