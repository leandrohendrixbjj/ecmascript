console.clear();

const customers = require('./helper.json');

function orderBy(list, fieldName, order = 'asc') {
    const result = list.sort((a, b) => {
        if (a[fieldName] < b[fieldName]) return -1
        if (a[fieldName] > b[fieldName]) return 1
        return 0
    })

    if (order == 'desc')
        return result.reverse();

    return result
}

const data = orderBy(customers, "nome", 'desc');

console.log(data);
