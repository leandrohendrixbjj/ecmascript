const person = {
    "name": "leandro",
    "age": 33
 }
 
 const data = {
    ...person,
    phone: "123123"
 }
 
 console.log('Person', data); //Person { name: 'leandro', age: 33, phone: '123123' }