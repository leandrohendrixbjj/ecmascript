// Add uma key para cada linha do array
console.clear();

const people = [
    { id: 3, name: "Ribeiro" },
    { id: 1, name: "Leandro" },
    { id: 2, name: "Soares" },
];

const mapPeople = new Map();
for (let person of people) {
    const { id } = person;
    mapPeople.set(id, { ...person })
}

for (let [key, { id, name }] of mapPeople) {
    console.log(key, id, name);
}