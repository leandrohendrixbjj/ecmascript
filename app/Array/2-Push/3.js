console.clear()

// Add valores no final de um array com Prototype

const data = [1, 2]

Array.prototype.push.call(data, 3, 4)

console.log(data)
