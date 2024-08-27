console.clear()

const arr = [1, 2, 3]

/* utilizando Math.min/Math.max apply */
const max = Math.max.apply(null, arr)

console.log(`Max:${max}`) // 3
