console.clear();

const customers = require('./helper.json');

function orderBy(list, fieldName) {
    return list.sort((a, b) => {
        if (a[fieldName] < b[fieldName]) return -1
        if (a[fieldName] > b[fieldName]) return 1
        return 0
    })
}

console.log(
    orderBy(customers, "nome")
);
