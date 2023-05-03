console.clear();

function sum() {
    let total = 0;
    for (let row in arguments) {
        total += arguments[row];
    }
    return total;
}

let result = sum.apply(null, [1, 2, 3]);

console.log(`Result:${result}`);
