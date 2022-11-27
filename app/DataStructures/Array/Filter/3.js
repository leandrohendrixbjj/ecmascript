console.clear();
//Filtrando todos os valores pequenos

function isBigEnought(value) {
    return value > 10
}

const filter = [1, 12, 10, 23].filter(isBigEnought);

console.log(filter);