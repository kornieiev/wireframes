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

const refs2 = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

// refs2.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs } = getTimeComponents(deltaTime);
//       console.log(`${hours}:${mins}:${secs}`);

//       updateClockface({ hours, mins, secs });
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// refs2.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

// function updateClockface({ hours, mins, secs }) {
//   refs2.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

//
// переделывание на класс
// https://youtu.be/x-Hm2lZcOsM?t=7801

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer2 = new Timer({
  onTick: updateClockface,
});

function updateClockface({ hours, mins, secs }) {
  refs2.clockface.textContent = `${hours}:${mins}:${secs}`;
}

refs2.startBtn.addEventListener('click', timer2.start.bind(timer2));

refs2.stopBtn.addEventListener('click', timer2.stop.bind(timer2));

///////////////////////////
