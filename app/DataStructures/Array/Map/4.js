console.clear();

// Mapping an array of numbers using a function containing an argument
const obj = {
    length: 3,
    0: 10,
    1: 20,
    2: 30
}

console.log(Array.prototype.map.call(obj, (value) => value * 2));