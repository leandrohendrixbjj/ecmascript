
// It sets the length to the previous length plus the number of pushed elements.console.clear()
const data = {};

Array.prototype.push.call(data, 1, 2);

console.log(data);