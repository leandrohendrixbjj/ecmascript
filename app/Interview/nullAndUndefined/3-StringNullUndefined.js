console.clear()
// Se concaternar com undefined ou null, receberemos uma string de undefined ou null
const name = 'leandro'
const age = undefined

const str = (name + ' tem ' + age + ' anos')

console.log(`Value: ${str}\nType:${typeof str}`);


