console.clear();

let obj = {
    length: 3,
    0: 1,
    1: 2,
    2: 3
};

console.log(
    Array.prototype.map.call(obj, (value) => value * 2)
);