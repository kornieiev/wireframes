// приклад процедурного коду, в якому є змінні і функція для підрахунку результату.
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

// console.log(getWage(baseSalary, overtime, rate));

//

// Використовуємо ООП, зібравши дані в об'єкт employee.
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  }
};

// console.log(employee.getWage());

//

// Метод Object.create(obj)
const animal = {
  legs: 4
};
const dog = Object.create(animal);
dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

//
// Репета
//

//
//

// const objC = {
//   z: 5
// };

// const objB = Object.create(objC);

// objB.y = 2;

// console.log(objC);
// // console.log(objC.hasOwnProperty("z"));

// console.log(objB);
// console.log(objB.y);
// console.log(objB.z);

// objC.z = 100;
// console.log(objB.z);

//

////
////
////

//

// const Car = function ({ brand = "", model = "", price = "" } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// };

// const myCar1 = new Car({ brand: "vw", model: "passat", price: 18000 });
// console.log("myCar1", myCar1);

// const myCar2 = new Car({ brand: "opel", model: "corsa", price: 7000 });
// console.log("myCar2", myCar2);

// const myCar3 = new Car();
// console.log("myCar3", myCar3);

// myCar2.changePrice(50000);

// console.log("myCar2", myCar2);

// console.log("Car.prototype", Car.prototype);

// Car.prototype.changeModel = function (newModel) {
//   this.model = newModel;
// };

// myCar2.changeModel("bwm");
// console.log("myCar2", myCar2);

//

////
////
////

//

// https://youtu.be/snuVmKJ1gBg?t=3423

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const lola = new User({ email: "q@w.e", password: "qweqwe" });

console.log("lola", lola);

lola.changeEmail("new@email.com");
console.log("lola", lola);
