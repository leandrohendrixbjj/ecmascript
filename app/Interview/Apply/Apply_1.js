console.clear()

// E possível passar dados para uma função, sem parâmetros
// Você pode usar "arguments" para passar todos os argumentos para o objeto da chamada.
// O objeto chamado fica então responsável por manipular os argumentos.

/*eslint-disable*/
function sum() {
  let total = 0;
  for (let row in arguments) {
    total += arguments[row]
  }
  return total
}

const data = sum.apply(null, [1, 2, 3])

console.log(`Total: ${data}`); // 6