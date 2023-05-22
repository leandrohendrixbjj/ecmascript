console.clear();
// Weak aceita apenas sua chaves sejam objetos

const weakM = new WeakMap();

let person = { nome: 1 }

weakM.set(person, 'leandro');
// map.set('age', '30') Error
// map.set(1, 'M') Error


console.log(weakM.get(person));
