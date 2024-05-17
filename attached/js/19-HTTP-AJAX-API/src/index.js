////
////

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => {
//     console.log("response", response);
//     // Response handling
//   })
//   .then(data => {
//     console.log("data", data);

//     // Data handling
//   })
//   .catch(error => {
//     console.log("error", error);

//     // Error handling
//   });

////
////

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

////
////

// https://codepen.io/goit-academy/pen/dyvwPbV?editors=1010

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then(users => renderUsers(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

////
////

//
// fetch
// https://youtu.be/hwLI5XbA140?t=2013

import pokemonCard from "./pokemon-card.hbs";

const pokemonList = document.querySelector(".pokemon-list");

fetch("https://pokeapi.co/api/v2/pokemon/2")
  .then(res => {
    if (!res.ok) {
      throw new Error();
    }

    console.log("res:", res);
    return res.json();
  })
  .then(pokemon => {
    console.log("data:", pokemon);

    const markup = pokemonCard(pokemon);

    pokemonList.innerHTML = markup;
    return pokemon;
  })
  .catch(e => {
    console.log("error:", e);
  });
