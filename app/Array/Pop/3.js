//Call: return value that was removed by pop method only number
//The pop() method reads the length property 
//Witout length it won't work
console.clear();

const arr = {
    length: 3,
    unrelated: "foo",
    2: 4,
};

console.log(Array.prototype.pop.call(arr)); // 4
console.log(arr); // { length: 2, unrelated: 'foo' }
