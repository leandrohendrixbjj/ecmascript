console.clear();

// Object freeze não congela 100% o objeto.
// Para congelar 100% objeto é necessário usar ums fn: deepFreeze

const obj = {
    person: {
        name: "leandro", age: "30"
    }
}
Object.freeze(obj)

delete obj.person.name

console.log(obj);
