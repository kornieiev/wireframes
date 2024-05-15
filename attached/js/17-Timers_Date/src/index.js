import { Modal } from 'bootstrap';

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

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('нужно остановить интервал');
//     clearInterval(intervalId);
//     return;
//   }
//   promptCounter += 1;
//   console.log('Подпишись на рассылку! - ' + Date.now());
// }, PROMPT_DELAY);

// modal on Bootstrap
const modal = new Modal('#myModal');

const subscribe = document.querySelector('.js-subscribeBtn');
const notSubscribe = document.querySelector('.js-notSubscribeBtn');

let modalPromptCounter = 0;
let userSubscribed = false;

notSubscribe.addEventListener('click', onNotSubscribeBtn);
subscribe.addEventListener('click', onSubscribeBtn);

function onNotSubscribeBtn() {
  modalPromptCounter += 1;
}

function onSubscribeBtn() {
  userSubscribed = !userSubscribed;
  modal.hide();
  console.log('userSubscribed', userSubscribed);
}

// const showModal = setInterval(() => {
//   if (modalPromptCounter === MAX_PROMPT_ATTEMPTS || userSubscribed) {
//     clearInterval(showModal);
//     return;
//   }
//   console.log('show modal');
//   modal.show();
// }, 3000);

// modal on Bootstrap
//

////
////

//
// Date - Таймер
// https://youtu.be/x-Hm2lZcOsM?t=6142

const date = new Date().getTime();
const date2 = Date.now();
// console.log(date);
// console.log(date2);

// Таймер:

const startBtn = document.querySelector('.js-startBtn');
const stopBtn = document.querySelector('.js-stopBtn');

startBtn.addEventListener('click', () => {});

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const timeComponents = getTimeComponents(deltaTime);
      console.log('timeComponents:', timeComponents);
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}
