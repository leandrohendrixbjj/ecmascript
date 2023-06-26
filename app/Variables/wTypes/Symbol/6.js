console.clear();

// Symbol são proriedades escondiadas
const nome = Symbol('j1');

const person = {
    [nome]: 'leandro', // [] => informa que esse atributo é um Symbol
    age: "30"
}

// Symbol é ocultado no for
for (row in person) {
    console.log(person[row]);
}

// Symbol é apresentado
console.log(person[nome]);
