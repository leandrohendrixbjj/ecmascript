console.clear();

// Map, mesmo removendo o k1 ainda podemos acessar seu valor em memória
// WeakMap, se o valor for removido, não é possível acessa-lo, por isso
// WeakMap não tem o método foreach

const map = new Map();
const wMap = new WeakMap();

let k1 = { a: 1 }
let k2 = { b: 1 }

map.set(k1, 'k1')
wMap.set(k2, 'k2')

k1 = null;
map.forEach((key, val) => {
    console.log(key, val);
});

k2 = null;
console.log(wMap.get(k2));


