console.clear();
// Consulta os apartamentos que não possui complementos
const customers = require('./helper.json');

function seek(customers) {
    return customers.filter(customer => {
        return (customer.endereco.apartamento &&
            !customer.endereco.hasOwnProperty("complemento"))
    })
}

let data = seek(customers);

console.log(data);