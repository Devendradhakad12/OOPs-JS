function BanckAccount(customerName, balance = 0) {
  this.custmorName = customerName; // properties
  this.accountNumber = Date.now();
  this.balance = balance;
}

BanckAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BanckAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};


const devAccount = new BanckAccount("dev")
devAccount.deposit(50000)
console.log(devAccount)