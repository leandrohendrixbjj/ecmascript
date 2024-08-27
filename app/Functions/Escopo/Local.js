/*
  Escopo Local: variaveis declaradas dentro de uma função só podem ser acessadas
  na função. Mesmo que sejam const ou let
  Se existir uma local e global com mesmo nome, local tem prioridade dentro da função
*/

/* eslint-disable */
console.clear()

function main () {
  let local = 'http://locahost:300'
}

try {
  console.log(local)
} catch (error) {
  console.error(error)
}
