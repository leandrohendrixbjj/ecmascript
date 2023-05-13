console.clear();

const person = {
    name: 'leadnro',
    adress: {
        street: "Rua A",
        city: "SP",
        zipCode: "036"
    }
}

const letter = {
    to: person.name,
    ...person.adress
}

console.log(letter);
