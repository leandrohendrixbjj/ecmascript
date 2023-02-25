// it is like [a-zA-z0-9_]
const str = "This is a never 10 !_";
let regExp = /\w/ig;

console.log(str.match(regExp));