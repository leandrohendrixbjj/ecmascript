console.clear()
const data = []

function countDown(num) {
  if (num < 1) return []

  // Neste ponto é feita a recursividade
  // Js cria uma stack (pilha) com o resultado da chamada a countDown()
  // Depois que if for satisfatório
  // Add os valores que estão na stack em data
  countDown(num - 1)
  data.push(num)
  return data
}

console.log(
  `Result: ${countDown(5)}`
)