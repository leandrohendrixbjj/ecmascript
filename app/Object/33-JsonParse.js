// JsonParse => Converte uma string em Objeto
console.clear()

const person = '{"name":"leandro", "age":"30"}'
const obj = JSON.parse(person)
console.log(obj.name);