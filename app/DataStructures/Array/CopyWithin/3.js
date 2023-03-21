console.clear();

let target = 0; // Posição para a qual os elementos serão copiados.
let start = -2; // Se start for negativo, ele é tratado como length+start, onde length é o comprimento do array.
let end = -1; //Se end for negativo, ele é tratado como length+end.

let arr = [1, 2, 3, 40, 50].copyWithin(target, start, end)

console.log(arr);