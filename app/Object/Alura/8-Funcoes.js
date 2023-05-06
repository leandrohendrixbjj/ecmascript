console.clear();

const customer = {
    name: 'leandro',
    age: 22,
    phones: ['1234', '5678'],
    balance: 200,
    makePayment: function (value) {
        if (this.balance >= value) {
            this.balance -= value
            console.log(`The Payment was maked. New balance is ${this.balance}`);
        } else {
            console.log(`There isnt balence to make a payment. Your balance ${this.balance}`);
        }
    }
}

customer.makePayment(300)