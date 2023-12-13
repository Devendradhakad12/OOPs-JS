function BanckAccount(customerName, balance = 0) {
  this.custmorName = customerName; // properties
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = function (amount) {
    this.balance -= amount;
  };
}
 

// Dom
const accountForm = document.querySelector("#accountForm");
const custmorName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");
const Accounts = [];

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const depositAmount = document.querySelector("#depositBalance");

// Create Account
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (custmorName.value === "") {
    alert("All Field's required");
    return;
  }
  const acount = new BanckAccount(custmorName.value, +balance.value);
  Accounts.push(acount);
  custmorName.value = "";
  balance.value = "";
  console.log(Accounts);
});

// Deposit Amount
depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (accountNumber.value === "") {
    alert("All Field's required");
    return;
  }
 let account = Accounts.find((account)=> account?.accountNumber === Number(accountNumber.value))
 account.deposit(Number(depositAmount.value))
  console.log(Accounts);
});



/* const devAccount = new BanckAccount("Dev", 1000);
devAccount.withdraw(500);
console.log(devAccount);

const mahakAccount = new BanckAccount("Mahak");
mahakAccount.deposit(5000);
console.log(mahakAccount); */