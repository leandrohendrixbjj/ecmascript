// Number of Matches

//put two numbers between the curly brackets - for the lower and upper number of patterns.
const str = "aaaah";
const str_2 = "ah";

let regexp = /a{3,5}h/g;

console.log(regexp.test(str));

console.log(regexp.test(str_2));