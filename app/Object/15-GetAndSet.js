console.clear();
// Definindo getters e setters
var bank = {
    balance: 0,
    get show() {
        return this.balance;
    },
    set deposit(value) {
        this.balance = value;
    },
    withdraw: function (value) {
        if (this.balance > value)
            return this.balance -= value;
        return "No Balance avail";
    }
};

bank.deposit = 100;
console.log(bank.show); // 100
bank.withdraw(40);
console.log(bank.show); // 60
