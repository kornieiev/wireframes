//
// Promise - примеры кода из конспекта

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
// console.log(promise);

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => console.log("Finnaly result"));

//

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

//

// const makeGreeting = guestName => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("Mango")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

// Promise - примеры кода из конспекта
//

////
////

//
// Промисификация функций

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve("✅ вот ваше блюдо");
//       }

//       reject("❌ Извините закончили продукты");
//     }, DELAY);
//   });
// };

// makeOrder("пирожок").then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log("onMakeOrderSuccess");
//   console.log(result);
// }
// function onMakeOrderError(error) {
//   console.log("onMakeOrderError");
//   console.log(error);
// }

// Промисификация функций
//

////
////

//
// FETCH - POKEMON
// https://youtu.be/DqNRQ0p6m88?t=3386

// const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then(value => value.json())
//   .then(pokemon => {
//     console.log("pokemon", pokemon);
//   })
//   .catch(error => {
//     console.log("ЭТО В БЛОКЕ CATCH:");
//     console.log(error);
//   });

//
// Функция, которая возвращает fetch:

// const fetchPokemonById = function (id) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
// };

// function onFetchSuccess(pokemon) {
//   console.log("onFetchSuccess:", pokemon);
// }

// function onFetchError(error) {
//   console.log("onFetchError:", error);
// }

// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// Функция, которая возвращает fetch
//

////
////

//
// Пример: Ипподром:
// https://youtu.be/DqNRQ0p6m88?t=5180

const refs = {
  startBtn: document.querySelector(".js-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-result-table >tbody")
};

console.log("tableBody", refs.tableBody);

refs.startBtn.addEventListener("click", () => {
  const promises = horses.map(run);

  refs.winnerField.textContent = "";

  refs.progressField.textContent = "🏇🏻 Заезд начался, ставки не принимаются";

  Promise.race(promises).then(({ horse, time }) => {
    refs.winnerField.textContent = `🏆 Победил ${horse}, финишировав за ${time} времени`;

    updateResultsTable({ horse, time });
  });

  Promise.all(promises).then(x => {
    refs.progressField.textContent = "📋 Заезд окончен, принимаются ставки";
    console.log(
      "%c 📋 Заезд окончен, принимаются ставки",
      "color: blue; font-size: 14px"
    );
  });
});

let count = 0;

function updateResultsTable({ horse, time }) {
  count += 1;
  const tr = `<tr>
      <td>${count}</td>
      <td>${horse}</td>
      <td>${time}</td>
    </tr>`;

  refs.tableBody.insertAdjacentHTML("beforeend", tr);
}

const horses = [
  "Secretariat",
  "Thunderbolt",
  "Midnight Shadow",
  "Silver Blaze",
  "Golden Spirit",
  "Moonlight Sonata"
];

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomeTime(2000, 4000);

    console.log(
      "%c 🏇🏻 Заезд начался, ставки не принимаются",
      "color: brown; font-size: 14px"
    );

    setTimeout(() => {
      resolve({ horse, time });
      console.log(
        `%c 🏆 Победил ${horse}, финишировав за ${time} времени`,
        "color: green; font-size: 14px"
      );
    }, time);
  });
}

function getRandomeTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// run(horses[1])
//   .then(x => console.log(x))
//   .catch(e => console.log(e))
//   .finally(() => {
//     console.log(
//       "%c 📋 Заезд окончен, принимаются ставки",
//       "color: blue; font-size: 14px"
//     );
//   });

const promises = horses.map(run);

Promise.race(promises).then(x => console.log("Promise.race:", x));

Promise.all(promises).then(x => {
  console.log(
    "%c 📋 Заезд окончен, принимаются ставки",
    "color: blue; font-size: 14px"
  );
});
