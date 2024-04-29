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

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const lola = new User({ email: "q@w.e", password: "qweqwe" });

// console.log("lola", lola);

// lola.changeEmail("new@email.com");
// console.log("lola", lola);

//

////
////
////

// Статичные свойства

// https://youtu.be/snuVmKJ1gBg?t=4395

// User.message = "Я статическое свойство. Меня нет на экземплярах, или методах";
// console.log("lola", lola);
// console.log("User", User);
// console.log("User.message", User.message);

// User.showObj = function (obj) {
//   console.log(obj);
//   console.log(obj.email);
//   console.log(obj.password);
// };

// User.showObj(lola);

//

////
////
////

// Пример использования классов на плагине Siema
// https://youtu.be/snuVmKJ1gBg?t=5242

const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1
} = {}) {
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  // console.log("rootSelector", rootSelector);

  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector("[data-increment]");
  refs.decrementBtn = refs.container.querySelector("[data-decrement]");
  refs.value = refs.container.querySelector("[data-value]");

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    // console.log("🚀 ~ this._refs.incrementBtn.addEventListener ~ this:", this);
    this.increment();
    this.updateValueUI();
  });
  this._refs.decrementBtn.addEventListener("click", () => {
    // console.log("🚀 ~ this._refs.decrementBtn.addEventListener ~ this:", this);
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

const counter1 = new CounterPlugin({
  rootSelector: "#counter-1",
  step: 10,
  initialValue: 100
});
// console.log("counter1", counter1);

const counter2 = new CounterPlugin({ rootSelector: "#counter-2", step: 1 });
// console.log("counter2", counter2);

//

////
////
////

// Классы - новый способ записывать функцию-конструктор со свойством prototype
// https://youtu.be/Z-w9kLvu18A?t=100

// class Car {
//   static value =
//     "Статическое свойство, доступное только прототипу, но не экземпляру ";

//   static method = function (obj) {
//     console.log(
//       "Статический метод, доступный только прототипу, но не экземпляру"
//     );
//     console.log("obj", obj);
//   };

//   #privatProperty = "Examlpe of Privat Property";
//   // privatProperty не доступно на экземпляре класса

//   constructor({ brand, model, price } = {}) {
//     console.log("constructor");
//     console.log(this);

//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   updateModel(newModel) {
//     this.model = newModel;
//   }

//   getBrand() {
//     return this.brand;
//   }
//   setBrand(newBrand) {
//     this.brand = newBrand;
//   }
// }
// console.dir(Car);

// const myCar1 = new Car({ brand: "vw", model: "passat", price: 18000 });
// console.log("myCar1", myCar1);

// const myCar2 = new Car({ brand: "opel", model: "corsa", price: 7000 });
// console.log("myCar2", myCar2);

// // myCar1.changePrice(20000);
// // console.log("myCar1", myCar1);

// Car.method(myCar1);
// console.log(Car.value);

// console.log(myCar1.getBrand());

// myCar1.setBrand("Volvo");
// console.log(myCar1.getBrand());

//

////
////
////

// Наследование
// https://youtu.be/Z-w9kLvu18A?t=2323

class Hero {
  constructor({ name = "hero", xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon = "knife", ...restProps } = {}) {
    super(restProps);
    this.weapon = weapon;
  }
}

class SuperWarior extends Warrior {
  constructor({ roar = "AAAA", ...restProps } = {}) {
    super(restProps);
    this.roar = roar;
  }
  makeRoar(roarValue) {
    this.roar = roarValue;
    console.log("roarValue:", roarValue);
  }
}

const lola = new Hero({ name: "lola", xp: 1000 });
console.log("lola", lola);

lola.gainXp(500);

const leo = new Warrior({ name: "leo", xp: 5, weapon: "bazooka" });
console.log("leo", leo);

const loli = new SuperWarior({
  name: "loli",
  xp: 999,
  weapon: "topor",
  roar: "Hurray!"
});
console.log("loli", loli);

loli.makeRoar("I'll WIN!");
console.log("loli", loli);
