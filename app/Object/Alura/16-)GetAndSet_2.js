console.clear();

// Definindo getters e setters, após a criação do Objeto
const bank = {
    balance: 0,
    set deposit(value) {
        this.balance = value;
    },
    withdraw: function (value) {
        if (this.balance > value)
            return this.balance -= value;
        return "No Balance avail";
    }
};

Object.defineProperties(bank, {
    "show": { get: function () { return this.balance } }
})

bank.deposit = 100;
console.log(bank.show); // 100
bank.withdraw(40);
console.log(bank.show); // 60
