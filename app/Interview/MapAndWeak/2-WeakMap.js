console.clear()

// WeakMap, se o valor for removido, não é possível acessa-lo, por isso
// WeakMap não tem o método foreach

const wMap = new WeakMap()

let data = { name: 'Soares' }

wMap.set(data,'name')

data = null
console.log(wMap.get(data))
