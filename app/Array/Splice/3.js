//if we use a deleteCount great that array length, 
// it will remove all data from index
console.clear();

const arr = ["angel", "clown", "mandarin", "surgeon"];

arr.splice(1, 200);

console.log(arr);