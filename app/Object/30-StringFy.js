// O parâmetro replacer pode ser uma função ou uma matriz
console.clear()
function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}

const person = { name: "Leandro", age: 45, zipCode: 123, state: "SP" }
const jsonString = JSON.stringify(person, replacer);

console.log(jsonString); // {"age":45,"zipCode":123}