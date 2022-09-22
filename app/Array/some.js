// Return true if a value is ar array
const arr = ['leandro', 'soares', 'ribeiro'];

function values(names) {
    return names == 'leandro';
}

console.log(
    arr.some(values)
);