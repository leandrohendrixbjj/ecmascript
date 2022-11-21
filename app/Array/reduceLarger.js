console.clear();

const arr = [1, 2, 3];

let larger = arr.reduce((a, b) => {
    return Math.max(a, b)
});

console.log(`Larger number is: ${larger}`);