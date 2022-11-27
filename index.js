console.clear();

const arr = [100, 1, 2, 3];

let sum = arr.reduce((accumulate, element, index, arr) => {
    return accumulate += element
}, 1)

console.log(sum);