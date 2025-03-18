console.clear()

// JSON.parse => Transforma uma String em Jsona

const data = '{"name":"leandro","age":40,"filters":[1,2,3],"createdAt":"2024-01-01"}'

const jsonData = JSON.parse(data)

console.log(jsonData.name);
