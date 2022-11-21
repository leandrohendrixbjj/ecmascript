console.clear();

//  adds at an object
const obj = {};

Array.prototype.unshift.call(obj, 1);
Array.prototype.unshift.call(obj, 0);

console.log(obj);