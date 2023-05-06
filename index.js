console.clear();

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Leandro(name, age) {
    Person.call(this, name, age);
    this.adress = 'Rua A';
}

const leandro = new Leandro('leandro', 30);
console.log();