//
// Тест подключение Lodash

const result = _.add(2, 3);
console.log("result", result); // result 5

// Тест подключение Lodash
//

////

//
// Chatty-events
// https://youtu.be/nkkTOpXPt70?t=113

const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCounter = 0;

window.addEventListener("mousemove", _.throttle(onMouseMove, 500));

function onMouseMove(evt) {
  mouseMoveCounter += 1;

  coordsOutputRef.textContent = `
  Количество вызовов onMouseMove: ${mouseMoveCounter},
  X: ${evt.clientX},
  Y: ${evt.clientY},
  `;
}

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");

let inputChangeCounter = 0;

inputRef.addEventListener("input", _.debounce(onInputChange, 300));

function onInputChange(evt) {
  inputChangeCounter += 1;

  outputRef.textContent = `
  Количество вызовов onInputChange: ${inputChangeCounter}
  Значение: ${evt.target.value}`;
}

// Chatty-events
//

////

//
// Фильтр с поиском
// https://youtu.be/nkkTOpXPt70?t=1052

const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQL" },
  { label: "PestgreSQL" },
  { label: "MongoDB" }
];

const refs = {
  searchInput: document.querySelector(".js-searchInput"),
  showList: document.querySelector(".js-showList")
};

const inputValue = [];
refs.searchInput.addEventListener(
  "input",
  _.debounce(onSearchInputChange, 300)
);

const listItemsMarkup = createListItemMarkup(tech);

function createListItemMarkup(items) {
  return items
    .map(
      item => `
  <li>${item.label}</li>`
    )
    .join("");
}

function onSearchInputChange(evt) {
  const res = tech.filter(el =>
    el.label.toLowerCase().includes(evt.target.value.toLowerCase())
  );
  const listItemsMarkup = createListItemMarkup(res);

  insertMarkup(listItemsMarkup);
}

function insertMarkup(markup) {
  refs.showList.innerHTML = markup;
}

insertMarkup(listItemsMarkup);

// Фильтр с поиском
//
