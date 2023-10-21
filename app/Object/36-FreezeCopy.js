// Se uma copia de um objeto congelado for criada, a copia tbm nasce congelada
console.clear()

const person = {
    name: "leandro",
    age: 30
}

Object.freeze(person)

const obj = person

if (obj === person) console.log("Are equals");

if ( Object.isFrozen(obj) ) console.log("Obj is Frozen");



