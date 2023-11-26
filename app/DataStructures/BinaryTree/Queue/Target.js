// Encontra um valor dentro de uma arvore
console.clear()
const node = require('../Tree.js')

const tree = (node, target) => {

  if (!node) return 'Node is empty';

  if (!target) return "Target is empty";

  const queu = [node]

  while (queu.length > 0) {
    const current = queu.shift()

    if (current.value == target) return true

    if (current.left) queu.push(current.left)
    if (current.right) queu.push(current.right)
  }
  return false
}

console.log(tree(node, 'a'))
