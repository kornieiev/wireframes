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

//
// Fetch users
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

// Fetch users
//

////
////

//
// fetch pokemon
// https://youtu.be/hwLI5XbA140?t=2013

import pokemonCard from "./pokemon-card.hbs";

const refs = {
  pokemonList: document.querySelector(".pokemon-list"),
  pokemonForm: document.querySelector(".js-search-form")
};

refs.pokemonForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const pokemonId = form.elements.query.value;

  fetchPokemonById(pokemonId)
    .then(makeMarkup)
    .catch(error => {
      onFetchError(pokemonId, error);
    })
    .finally(() => form.reset());
}

function fetchPokemonById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

function makeMarkup(pokemon) {
  const markup = pokemonCard(pokemon);
  addMarkupToPage(markup);
}

function addMarkupToPage(markup) {
  refs.pokemonList.innerHTML = markup;
}

function onFetchError(pokemon, error) {
  console.log("Ошибка: ", error);
  alert(`${pokemon} не найден!`);
}

//
//

////
////

//
//

import "./css/common.css";

import NewsApi from "./components/Api/newsApi";
import makeNewsMarkup from "./components/markupMaker/makeNewsMarkup";

const inputNews = document.querySelector(".input-news");
const loadNewsBtn = document.querySelector(".news-btn");
const newsList = document.querySelector(".news-list");
const loadMoreBtn = document.querySelector(".load-more-btn");

const newsApi = new NewsApi();

inputNews.addEventListener("input", onInputChange);
loadNewsBtn.addEventListener("click", onLoadNews);
loadMoreBtn.addEventListener("click", onLoadMore);

let searchQuery = "";

function onInputChange(e) {
  searchQuery = e.currentTarget.value;
}

function onLoadNews() {
  if (!searchQuery) {
    return;
  }
  newsApi.query = searchQuery;
  newsApi.fetchNews().then(data => {
    console.log("🚀 ~ newsApi.fetchNews ~ data:", data);
    clearArticlesContainer();

    addNewsToPage(data);
  });
}

function onLoadMore() {
  newsApi.fetchNews().then(data => {
    addNewsToPage(data);
  });
}

function addNewsToPage(data) {
  newsList.insertAdjacentHTML("beforeend", makeNewsMarkup(data));
}

function clearArticlesContainer() {
  newsList.innerHTML = "";
}

//
//
