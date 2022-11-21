console.clear();

// Adds one or more elements to the end of an array and returns the new length of the array.
const arr = [1, 2];
const arr2 = [3, 4];

arr.push(...arr2); //Spread

console.log(arr);
