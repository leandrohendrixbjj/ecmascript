console.clear();
const customers = require('./helper.json');

function seek(list, target, value) {
    return list.find((item) => item[target].includes(value))
}

const data = seek(customers, "nome", "Olva");

console.log(data);