// o método toJSON() personaliza o comportamento da stringificação JSON
console.clear()

const person = {
    name: "leandro",
    toJSON: function () {
        return 30
    }
}

const str = JSON.stringify(person) //30
const str_2 = JSON.stringify({ age: person }) //{"age":30}

console.log('str:', str);
console.log('str_2:', str_2);