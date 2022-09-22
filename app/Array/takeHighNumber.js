const array = [1, 2, 3];

// Option 1
let maxi = Math.max.apply(null, array);

// Option 2
let maxiMuchBetter = Math.max(...array);

console.log('Maxi', maxi);
console.log('MuchBetter', maxiMuchBetter);