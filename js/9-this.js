//
// this в callback-функціях

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  // console.log(`Обробляємо заявку від ${callback()}.`);
}

makeMessage(customer.getFullName); // Буде помилка у виклику функції

// this в callback-функціях
//

//
// .call()

const showThis = function (a, b, c) {
  console.log("ShowThis -> this", this);
  console.log(a);
  console.log(b);
  console.log(c);
};

showThis();

const objA = {
  a: 5,
  b: 10
};

showThis.call(objA, "a", "b", "c");

showThis.apply(objA, ["aa", "bb", "cc"]);

// .call()
//
