import BSN from 'bootstrap.native';
const modal = new BSN.Modal('#myModal');

console.log('modal', modal);

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
  notification: document.querySelector('.js-alert'),
};

document.addEventListener('DOMContentLoaded', function () {
  refs.notification.addEventListener('click', () => {
    refs.notification.classList.add('animate-out');
    if (refs.notification.classList.contains('animate-out')) {
      clearTimeout(timeout);
    }
  });
});

const timeout = setTimeout(() => {
  // console.log("Срабатывание setTimeout");
  refs.notification.classList.add('animate-out');
}, 3000);

// Пример - Оповещение
//

////
////

//
// Промпт Подписки
// https://youtu.be/x-Hm2lZcOsM?t=3668

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('нужно остановить интервал');
    clearInterval(intervalId);
    return;
  }
  promptCounter += 1;
  console.log('Подпишись на рассылку! - ' + Date.now());
}, PROMPT_DELAY);
