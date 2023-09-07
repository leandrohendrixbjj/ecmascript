console.clear()

function countDown(num) {
  if (num < 1) return []

  // Neste ponto é feita a recursividade
  // Onde os valores são add em uma stack(pilha)
  // Depois que if for satisfatório
  // Os valores da stack são add no push
  const stack = countDown(num - 1)
  stack.push(num)

  return arr
}

const data = countDown(5)

console.log(data);