// GET => Obtem um valor desejado
const data = [
    { id: 1, name: 'Leandro' },
    { id: 2, name: 'Soares' },
    { id: 3, name: 'Ribeiro' },
];

const people = data.map(({ id, name }) => {
    return ({ id: id, name: name.toLocaleLowerCase() })
});

const map = new Map();
for (person of people) {
    let { name } = person;
    map.set(name, { ...person })
}

let nome = 'LEANDRO'
console.log(map.get(nome.toLocaleLowerCase()));