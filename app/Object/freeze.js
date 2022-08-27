let person = {
    name: 'Leandro',
    age: 37    
 }
 Object.freeze(person);
 
 person.age = 40;
 console.log(person);
 