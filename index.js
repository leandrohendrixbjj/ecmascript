console.clear();

const data = require('./helper.json')

function seek(list, field, value) {
    const result = list.find((item) => item[field].includes(value))

    if (result)
        return result
}

try {
    const person = seek(data, 'elefone', '4733865848')
} catch (error) {
    console.log(error);
}

console.log(person);
