// Removendo itens duplicados num array

const nums = [5, 0, 1, 1, 3, 2, 2];

const withoutDuplicity = nums.filter((element, index, arr) => {
    return nums.indexOf(element) == index;
});

console.log(withoutDuplicity.sort());