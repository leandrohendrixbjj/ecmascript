console.clear();
// Retorna o tipo de variabel
const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
        typeString.indexOf(' ') + 1,
        typeString.indexOf(']')
    ).toLowerCase()
}

console.log(typeCheck({ name: 'a' }));