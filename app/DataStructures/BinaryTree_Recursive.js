console.clear()

//  a
// / \
// b  c
// / \ \
// d e  f

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function tree(node) {

    if (!node) return []

    const left = tree(node.left)
    const right = tree(node.right)

    return [node.value, ...left, ...right]
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(a);

const data = tree(a)
console.log(data);
