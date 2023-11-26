console.clear()
const node = require('../Tree.js')

function tree(node) {

    if (!node) return []

    const left = tree(node.left)
    const right = tree(node.right)

    return [node.value, ...left, ...right]
}


const data = tree(node)

console.log(data);

