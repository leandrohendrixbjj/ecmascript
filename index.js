console.clear()

const a = require('./helpIndex.js')

function tree(node) {
    const queue = [node]
    const data = []

    while (queue.length > 0) {
        let current = queue.pop()
        data.push(current.val)

        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }
    return data
}

const r = tree(a)

console.log(r);