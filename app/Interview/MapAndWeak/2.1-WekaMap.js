console.clear()

// Weak aceita apenas que suas chaves sejam objetos

const weakMap = new WeakMap()

const person = { name: 'leandro' }
try {
  weakMap.set(person, 'name')
  weakMap.set('age', '30') // Error
} catch (err) {
  console.log(err)
}

console.log(weakMap.get(person))
