console.clear();

// Remove atributo do objeto

const person = new Object();
person.name = 'leandro';
person.age = '30';

delete person.age;

console.log('age' in person); // false