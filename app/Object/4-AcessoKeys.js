console.clear();

const keys = ['name', 'age', 'salary'];
const person = {
    name: "leandro Soares",
    age: 30,
    salary: 100
}


keys.forEach((fieldName) => {
    console.log(`${fieldName} : ${person[fieldName]}`);
})
