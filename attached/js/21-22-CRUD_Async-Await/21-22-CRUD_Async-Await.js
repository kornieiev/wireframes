////
//// C R U D ////
////

//
//

function addData(data) {
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  };

  return fetch("https://jsonplaceholder.typicode.com/posts", options).then(
    response => response.json()
  );
}

addData({
  author: "Mango",
  body: "CRUD is awesome"
})
  .then(renderBook)
  .catch(error => console.log(error));

function renderBook(post) {
  console.log("Пришел ответ от бекенда. Можно рисовать");
  console.log("poST:", post);
}

////

// const postToUpdate = {
//   id: 1,
//   body: "CRUD is RRRRRRRRRRRReally awesome"
// };

// const options2 = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   }
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options2)
//   .then(response => response.json())
//   .then(patch => console.log("patCH:", patch))
//   .catch(error => console.log(error));

// ////

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE"
// })
//   .then(() => console.log("Post deleted"))
//   .catch(error => console.log("Error:", error));

const fetchUsersBtn = document.querySelector(".btn-1");
const userList = document.querySelector(".user-list-1");

fetchUsersBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    console.log("responsE:", response);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  console.log("useRS:", users);
  return users;
}

function renderUserListItems(users) {
  const markup = users
    .map(
      user => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
}

//// C R U D ////
//

////
////

//
// Синтаксис async/await

async function getFruit(name) {
  const fruits = {
    strawberry: "🍓",
    kiwi: "🥝",
    apple: "🍎"
  };

  // return 5;

  return Promise.resolve(fruits[name]);
}

console.log(getFruit("apple")); // Promise {}

getFruit("apple").then(r => console.log("r", r)); // 5

const d = await getFruit("apple");
console.log("d", d);

////

async function fn() {}

const someFn = async function () {};

const arr = async () => {};

const x = {
  async getName() {}
};

class X {
  async getName() {}
}

// Синтаксис async/await
//

////
////

//
//// C R U D  с  async/await ////
