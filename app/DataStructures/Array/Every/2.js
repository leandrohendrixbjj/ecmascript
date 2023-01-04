console.clear();

// Element: valor do elemento do array
// Index: index do elemento dentro do array
// Array: array completo
const arr = [1, 2, 3, 4];
function isBigEnough(element, index, array) {
    console.log(
        `Element: ${element} - Index: ${index} - Array: ${array}`
    );
    return element <= 10;
}

console.log(
    arr.every(isBigEnough)
);