console.clear();

class Person {
    constructor(name) {
        this.id = Symbol(),
            this.name = name
    }
}

const persons = [
    new Person('leandro'), new Person('soares'), new Person('ribeiro')
];

const seek = persons[2];

const result = persons.find(item => item.id == seek.id);

console.log(result);

