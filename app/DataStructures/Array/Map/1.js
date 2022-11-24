console.clear();
//  creates a new array populated with the results of calling
const arr = [9, 16];

const roots = arr.map((value) => {
    return Math.sqrt(value)
});

console.log(roots);
console.log(arr); // numbers is still