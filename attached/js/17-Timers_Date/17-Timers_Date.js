//
// setInterval - clearInterval

// const loger = (text, intervalTime) => {
//   console.log(`${text}! intervalTima=${intervalTime} - ${Date.now()}`);
// };
// const intervalTime = 3000;

// setInterval(loger, 2000, "hello", intervalTime);

// const startInterval = setInterval(loger, 2000, "start", intervalTime);

//

// const stopInteval = Math.random() > 0.3;
// console.log("stopInteval", stopInteval);
// if (stopInteval) {
//   clearInterval(startInterval);
// }

// setInterval - clearInterval
//

///
///

//
// Пример - Оповещение
// https://youtu.be/x-Hm2lZcOsM?t=3007

const refs = {
  notification: document.querySelector(".js-alert")
};

document.addEventListener("DOMContentLoaded", function () {
  refs.notification.addEventListener("click", () => {
    refs.notification.classList.add("animate-out");
    if (refs.notification.classList.contains("animate-out")) {
      clearTimeout(timeout);
    }
  });
});

const timeout = setTimeout(() => {
  console.log("Срабатывание setTimeout");
  refs.notification.classList.add("animate-out");
}, 3000);

// Пример - Оповещение
//

////
////

//
// Промпт Подписки
// https://youtu.be/x-Hm2lZcOsM?t=3668

//

// return masked string
function maskify(cc) {
  const newString = cc.split("");
  console.log("newString.length", newString.length);

  if (newString.length <= 4) {
    console.log("RESULT", cc);
    return cc;
  }

  const length = newString.length - 4;
  console.log("length", length);

  const notHide = newString.splice(length);
  console.log("notHide", notHide);

  let string = "";

  for (let i = 0; i < length; i++) {
    string += "#";
  }

  console.log("string", string);

  // return string + notHide.join("");
  console.log("RESULT:", string + notHide.join(""));
}

maskify("4556364607935616");

// maskify("4556364607935616");
// maskify("1");
// maskify("11111");
