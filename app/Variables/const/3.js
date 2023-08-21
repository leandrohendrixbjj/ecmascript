// In this case const is not immutable
console.clear()

const person = {
    name: 'leandro',
    age: 30
}

person.age = '20'

console.log(person);
