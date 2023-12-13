class BankAccount {
  customerName;
  accountNumbe;
  balance = 0;

  constructor(name, balance = 0) {
    this.customerName = name;
    this.balance = balance;
    this.accountNumbe = Date.now();
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

const devAccount = new BankAccount("Dev");
devAccount.deposit(5000);
console.log(devAccount);
const mahakAccount = new BankAccount("Mahak");
mahakAccount.deposit(2000);
console.log(mahakAccount);


// Hoisting is not work with classes