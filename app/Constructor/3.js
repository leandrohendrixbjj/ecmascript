console.clear()

const Person = require('./Person.js')

class Leandro extends Person {
  constructor(name, age) {
    super(name, age)
  }
}

const data = new Leandro('leandro', 30)

console.log(data);