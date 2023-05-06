console.clear();

//Invoca uma função com um dado valor this e argumentos passados individualmente.
//A principal diferença é que call() aceita uma lista de argumentos,
//enquanto apply() aceita um único array de argumentos.

function show() {
    return arguments;
}

let data = show.call(this, { name: 'leandro' }, 30, ['Honda', 'Suzuki']);

console.log(data);