const array = [1,2,3];

let maxi = Math.max.apply(null,array);

let maxiMuchBetter = Math.max(...array);

console.log('Maxi', maxi);
console.log('MuchBetter', maxiMuchBetter);