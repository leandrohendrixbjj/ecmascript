console.clear();

const map = new WeakMap();

let k1 = { name: "a" }

k1 = null
map.set(k1, 'leandro')

console.log(map.get(k1));


