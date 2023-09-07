// Escopo Local: variaveis declaradas dentro de uma função
// só podem ser acessadas na função.
// Se existir uma local e global com mesmo nome, local tem prioridade dentro da função
console.clear()

function start() {
    let myGlobal = 10
}

try {
    console.log(myGlobal);
} catch (error) {
    console.log(error);
}