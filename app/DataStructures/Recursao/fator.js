const nums = [];

function fator(n){
  if(n < 1){ return 1};
  if(n > 1){nums.push(n)}

  return n * fator(n -1);
}

console.log(fator(5));
console.log(nums);
