let values = [];
let regexp = /[\D]/g;
values.push('x' + 1);
values.push(3 + 'c');
values.push(2 + 'b');
values.push(5 + 'a');

function order(a,b){
 if (a.match(regexp) > b.match(regexp)) return 1;
 if (a.match(regexp) < b.match(regexp)) return -1;
 return 0; 
}

console.log(values.sort(order));
