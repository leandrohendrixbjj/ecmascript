console.clear();

// Exemplo de Objeto

const person = {
    name: "leandro",
    age: 30,
    motors: ['Biz', 'Himalayan'],
    people: [
        { name: "Wagner" },
        { name: "Magno" },
    ],
    salary: 3000,
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

