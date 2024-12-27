console.clear()

// Remove o último elemento de um array com Prototype

const data = [1, 2, 3]

Array.prototype.pop.call(data)

console.log(data)
