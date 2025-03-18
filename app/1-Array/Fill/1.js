console.clear();

//  fill() preenche todos os valores do array a partir do índice inicial 

const arr = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(arr.fill(5, 1)); // [1, 5, 5, 5]

console.log(arr.fill(6)); // [6, 6, 6, 6]