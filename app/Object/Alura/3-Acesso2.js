console.clear();

const keys = ['name', 'age', 'city', 'salary']
const person = {
    name: 'leandro',
    age: 30,
    city: 'sao paulo',
}

keys.forEach((key) => {
    console.log(person[key]);
})

