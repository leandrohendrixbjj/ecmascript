console.clear()

const person = {
  name: 'Leandro',
  age: 33
}

// Created a new object
const data = {
  ...person,
  phone: '551199859468'
}

console.log('Person', data) // Person { name: 'leandro', age: 33, phone: '551199859468  ' }]
