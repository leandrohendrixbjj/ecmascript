// ^ => Search at begin of string
const string = 'Rick is first and can be found.';
const string_2 = "You didn't find Rick now.";

let first = /^Rick/;

console.log('First', first.test(string));
console.log('Second', first.test(string_2));

