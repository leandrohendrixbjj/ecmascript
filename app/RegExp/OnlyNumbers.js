console.clear();

const name = "leandro12";
let regExp = /\d/g;
let numbers = name.match(regExp).toString().replace(",", "")

console.log(
    numbers.replace(/,/g, "")
)