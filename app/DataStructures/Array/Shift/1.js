console.clear();
// Remove the first element from an array and returns that removed element. 
// Shift has the similar behaviour to pop()
const arr = [1, 2];

let value = arr.shift() // 1 

console.log(
    `Value removed: ${value} arr: ${arr}`);