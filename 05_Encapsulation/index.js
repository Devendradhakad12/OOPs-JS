class BankAccount {
  customerName;
  accountNumbe;
  #balance = 0; // Private - we can access privete properties only within main class , we can't access this private property in inherite class and outside of the main class

  constructor(name, balance = 0) {
    this.customerName = name;
    this.#balance = balance;
    this.accountNumbe = Date.now();
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    if (isNaN(amount) || typeof amount !== "number") {
      throw new Error("Amount must be Number");
    }
    this.#balance += amount;
  }
  get balance() {
    return this.#balance;
  }



/*   setBalance(amount) {
    if (isNaN(amount) || typeof amount !== "number") {
      throw new Error("Amount must be Number");
    }
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  } */
}

// Inherite BankAccount Class
class CurrentAccount extends BankAccount {
  transitionLimit = 5000;
  constructor(name, balance = 0) {
    super(name, balance);
  }
  #calculateIntrest(amount){ // private method
    console.log("Calculating Intterast:", amount) 
  }
  takeBusisnessLoan(amout) {
    this.#calculateIntrest(amout)  
    console.log(`Business Loan: ${amout}`);
  }
}

const devAccount = new CurrentAccount("Dev");
devAccount.deposit(5000);
devAccount.balance = 45;
//devAccount.setBlanace(45)
devAccount.takeBusisnessLoan(100)
console.log(devAccount);
console.log(devAccount.balance);

 