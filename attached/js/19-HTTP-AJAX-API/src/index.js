console.log("Hello, Webpack!");
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

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

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

let globalVariable; // undefined

// Initializing data fetching
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log("users inside then callback: ", users);

    // Writing the result to a global variable
    globalVariable = users;

    // Everything is ok here, the data is in the variable
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// No async data here
console.log("globalVariable outside fetch: ", globalVariable); // undefined
