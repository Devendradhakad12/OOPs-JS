// Utility Functions

class Config {
  static dbUser = "username";
  static dbPassword = "secret";
}
console.log(Config.dbUser);

class User {
  static cache = {
    1: "some value",
  };
  static id = 1;
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }
  static compareByAge(a, b) {
    return a.age - b.age;
  }
  static compareByIncome(a, b) {
    return a.income - b.income;
  }
  static hasInCache() {
    console.log(this.cache);
  }
};


const user1 = new User("dev", 19, 5000);
const user2 = new User("mahak", 40, 10000);
const user3 = new User("payal", 20, 2000);

const users = [user1, user2, user3];
//users.sort(User.compareByAge);
users.sort(User.compareByIncome);
User.hasInCache()
console.log(users);
