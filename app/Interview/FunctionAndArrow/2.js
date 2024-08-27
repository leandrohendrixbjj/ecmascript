// 1-) Retorna valor sem a palavra return
console.clear()

let person = () => 'leandro'
console.log(person())

// Toda vez que usar {} precisa informar a palavra return
person = () => {
  return 'soares'
}
console.log(person())

// Json
person = () => {
  return { name: 'leandro', age: 30 }
}
console.log(person())

// Json II
person = () => ({ name: 'soares', age: 40 })
console.log(person())
