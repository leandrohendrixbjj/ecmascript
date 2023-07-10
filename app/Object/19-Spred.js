console.clear();
//Spred
const person = {
    name: "leandro",
    adress: {
        street: "Rua A",
        number: 10,
        house: true
    }
}
const letter = {
    to: person.name,
    ...person.adress
}
console.log(letter);
