function BanckAccount(customerName, balance = 0) {
  this.custmorName = customerName; // properties
  this.accountNumber = Date.now();
  this.balance = balance;
}

const devAccount = new BanckAccount("Dev",1000)
console.log(devAccount)