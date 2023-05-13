console.clear();

const person = {
    name: "leandro",
    age: 20,
    children: [
        { name: "Sabrina" },
        { name: "Sophia" },
    ]
}

person.children.push({ name: "Carla" })

const daughter = person.children.filter(child => child.name == 'Sophia')

console.log(daughter);
console.log(`Typeof ${typeof daughter}`);

