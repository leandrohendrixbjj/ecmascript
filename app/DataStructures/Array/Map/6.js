console.clear();
// GET => Obtem um valor desejado
const people = [
    { id: 3, name: "Ribeiro" },
    { id: 1, name: "Leandro" },
    { id: 2, name: "Soares" },
];

const map = new Map();
for (let person of people) {
    let { id } = person;
    map.set(id, { ...person })
}

console.log(map.get(1));



