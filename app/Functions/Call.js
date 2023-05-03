console.clear();

//Invoca uma função com um dado valor this e argumentos passados individualmente.
//A principal diferença é que call() aceita uma lista de argumentos,
//enquanto apply() aceita um único array de argumentos.

function print(name, age) {
    return arguments;
}

let person = print.call(this, 'leandro', 30);

console.log(person);