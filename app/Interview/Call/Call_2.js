console.clear();

//Invoca uma função com um dado valor this e argumentos passados individualmente.
//A principal diferença é que call() aceita uma lista de argumentos,
//enquanto apply() aceita um único array de argumentos.

function Person(name, age) {
    this.name = name;
    this.age = age;
    return this;
}

function Leandro(name, age) {
    Person.call(this, name, age);
    this.adress = 'Rua A';
}

function Soares(name, age) {
    Person.call(this, name, age);
    this.balace = 100;
}

const leandro = new Leandro('leandro', 30);
const soares = new Soares('soares', 50);
console.log(leandro);
console.log(soares); 