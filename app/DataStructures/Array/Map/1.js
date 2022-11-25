console.clear();
//  creates a new array populated with the results of calling
const arr = ["1", "2"];

const roots = arr.map((value) => {
    return parseInt(value)
});

console.log(roots);
console.log(arr); // numbers is still