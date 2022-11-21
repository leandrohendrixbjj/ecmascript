console.clear();

//  adds one or more elements to the beginning of an array.
const arr = [3];

arr.unshift(2);
arr.unshift(0, 1);
arr.unshift([-2, -1])

console.log(
    `arr:${arr} size:${arr.length}`);