console.clear();

const customer = {
    name: "leandro",
    age: 20
}

const addres = {
    street: 'Rua vince',
    zipcode: "030493"
}

Object.assign(customer, { addres });

console.log(customer);
