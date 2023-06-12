console.clear();

class Customer {
    constructor(name) {
        this.id = Symbol(),
            this.name = name
    }
}

const customers = [
    new Customer('leandro'), new Customer('soares'), new Customer('ribeiro')]

const n = customers[0];

const customer = customers.filter((item) => item.id == n.id);

console.log(customer);
