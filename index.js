console.clear();

class Person {
    constructor(name, age) {
        this._name = name;
        Object.freeze(this);

    }

    get name() {
        return this._name
    }
}

let person = new Person('Leandro', 30);
person.name = 'Carlos'
console.log(person.name);



