console.clear();

// Multiplica par por 2 e impar por 3
const arr = [1, 2, 3, 4, 5];

const x = arr.map((value) => {
    if (value % 2 == 0)
        return value * 2;
    return value * 3;
});

console.log(x);