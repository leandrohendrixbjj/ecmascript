const arr = ['1','12',0,-4,-5,3,2];

const nums = arr.filter(num => Number.isInteger(num) && num > 0);

console.log(nums);