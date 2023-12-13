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

// Inherite BankAccount Class
class CurrentAccount extends BankAccount {
  transitionLimit = 5000;
  constructor(name, balance = 0) {
    super(name, balance);
  }
  takeBusisnessLoan(amout){
   console.log(`Business Loan ${amout}`)
  }
}

const devAccount = new CurrentAccount("Dev");
devAccount.deposit(5000);
devAccount.takeBusisnessLoan(1000)
console.log(devAccount);

const mahakAccount = new BankAccount("Mahak");
mahakAccount.deposit(2000);
console.log(mahakAccount);
