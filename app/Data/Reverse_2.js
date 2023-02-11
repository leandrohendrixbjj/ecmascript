
console.clear();

let data_2 = "20230131";

let year = data_2.slice(0, 4);
let month = data_2.slice(4, 6);
let day = data_2.slice(-2);

let d = `${day}-${month}-${year}`

console.log(d);