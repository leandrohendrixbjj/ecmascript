// Removendo itens duplicados num array

const nums = [5, 0, 1, 1, 3, 2, 2];
const withoutDuplicity = nums.sort().reduce((acc, value, index, row) => {
    if (acc.length === 0 || acc[acc.length - 1] != value)
        acc.push(value);

    return acc;
}, []);

console.log(withoutDuplicity);