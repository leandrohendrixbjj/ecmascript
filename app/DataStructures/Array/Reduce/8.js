// Substituindo .filter().map() por .reduce()
console.clear();
const numbers = [-5, 6, 2, 0,].reduce((accumulate, currentValue) => {
    if (currentValue > 0) {
        const mult = currentValue * 2;
        accumulate.push(mult)
    }
    return accumulate;
}, [])

console.log(numbers);