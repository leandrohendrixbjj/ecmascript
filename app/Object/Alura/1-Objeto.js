console.clear();

// Exemplo de Objeto

const person = {
    name: "leandro",
    Name: 'Soares',
    age: 30,
    salary: 3000,
    1: 'Position',
    adress: {
        city: "São Paulo",
        street: "Rua X",
        number: "69"
    },
    motors: ['Biz', 'Himalayan'],
    people: [
        { name: "Wagner" },
        { name: "Magno" },
    ],
    makePayment: function (value) {
        if (this.salary >= value) {
            this.salary -= value;
            console.log(`Balance: ${this.salary}`);
        } else {
            console.log(`not Balance: ${this.salary}`);
        }
    },
    set deposit(value) {
        if (value > 0) {
            this.salary += value
        }
    },
}

Object.defineProperties(person, {
    "showSalary": { get: function () { console.log(this.salary) } }
});

