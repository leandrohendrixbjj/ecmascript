// Escopo: variaveis declaradas fora de uma função
// pode ser acessada globalmente.
// Var tem escopo global em toda aplicação
console.clear()

let myGlobal = 5;

function start() {
    myGlobal = 10
    console.log(myGlobal)
}

start()