console.clear()

function factor(num) {
  if (num < 1) return 1

  // Neste ponto é feita a recursividade
  // Js cria uma stack (pilha) com o resultado da chamada a factor()
  // Depois que if for satisfatório
  // Add os valores que estão na stack em data
  const data = num * factor(num - 1)
  return data
}

console.log(
  `Result: ${factor(5)}`
)