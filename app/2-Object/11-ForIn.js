console.clear();

const person = {
    name: "leandro Soares",
    age: 30,
    salary: 100,
    1: "Position",
    adress: {
        city: "São Paulo",
        street: "Rua A"
    },
    children: [
        { name: "Sabrina" },
        { name: "Sophia" },
    ]
}

//Acesso apenas a lista
for (let row in person) {
    if (typeof person[row] == 'object') {
        if (row == 'children') {
            console.log(person[row]);
        }
    }
}

//Acesso apenas aos não objetos
for (let row in person) {
    if (typeof person[row] !== 'object') {
        console.log(`${row} ${person[row]}`);
    }
}
