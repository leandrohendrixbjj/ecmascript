console.clear();

// Retorna true se achou o valor no array

let searchFor = 10;
let fromIndex = 1; // Posição no array. Por padrão, 0.

console.log(
    [10, 20, 30].includes(10, fromIndex)); // false


fromIndex = 0;
console.log(
    [10, 20, 30].includes(10, fromIndex)); // false