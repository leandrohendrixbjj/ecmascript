console.clear()

//     a
//    /  \
//    b   c
//   / \   \
//   d  e   f

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function builtTree(root) {
    const stack = [root];
    const data = []

    while (stack.length > 0) {
        let current = stack.pop() // Remove do final da pilha

        data.push(current.val)

        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)

    }
    return data
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const data = builtTree(a);
console.log(a);
console.log(data);


