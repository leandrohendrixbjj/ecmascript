console.clear()

/*
  Método statico que retorna:
    Se o argumento é um número positivo, o retorno será 1;
    Se o numero passado for negativo, o retorno será -1
    Se o argumento for um zero positivo , o retorno será +0
    Se o argumento for 0 negativo , o retorno será -0
*/

console.log(Math.sign(3)) // 1

console.log(Math.sign(-3)) // -1

console.log(Math.sign(0)) // 0

console.log(Math.sign('-3')) // -1

console.log(Math.sign(true)) // 1

console.log(Math.sign(false)) // 0
