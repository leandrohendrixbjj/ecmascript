console.clear();

// It sets the length to the previous length plus the number of pushed elements.
const obj = {};

Array.prototype.push.call(obj, 1, 2);

console.log(obj);