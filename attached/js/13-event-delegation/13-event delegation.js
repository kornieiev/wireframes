//
// Патерн Делегирование событий
const container = document.querySelector(".js-container");
const addBtn = document.querySelector(".add-button");

// console.dir(container.children.length);

addBtn.addEventListener("click", addButton);

function addButton() {
  const addNewBTN = document.createElement("button");
  addNewBTN.type = "button";
  addNewBTN.textContent = `Кнопка ${container.children.length + 1}`;

  container.append(addNewBTN);
}

container.addEventListener("click", evt => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  console.log("evt.target", evt.target);
  console.log("evt.currentTarget", evt.currentTarget);
});

// Патерн Делегирование событий
//

////

//
// Патерн отслеживание кликов по элементам списка - фильтр
// https://youtu.be/vnSnT-Uo8JI?t=1542

const tags = document.querySelector(".js-tags");
let selectedTegs = null;

tags.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const currentActiveBtn = document.querySelector(".active");

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove("active");
    selectedTegs = null;
    // return;
  }
  // currentActiveBtn?.classList.remove("active");

  activeStatus(evt.target);

  // console.dir(evt.target.attributes["data-value"].value);

  selectedTegs = evt.target;
  console.log("🚀 ~ selectedTegs:", selectedTegs);

  function activeStatus(target) {
    target.classList.toggle("active");
  }

  if (currentActiveBtn === evt.target) {
    console.log("bingo!", currentActiveBtn === evt.target);
    activeStatus(evt.target);
  }
}

// Патерн отслеживание кликов по элементам списка - фильтр
//

////

//
// Патерн отслеживание кликов по элементам списка - фильтр - 2
// https://youtu.be/vnSnT-Uo8JI?t=2598

const tags2 = document.querySelector(".js-tags2");

tags2.addEventListener("click", onTagsClick);

const selectTegs = new Set();

function onTagsClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  evt.target.classList.toggle("active");

  // selectTegs.add(evt.target.dataset.value2);
  // console.log("dataset:", evt.target.dataset.value2);

  if (selectTegs.has(evt.target.dataset.value2)) {
    // проверит есть ли в Set искомое значение
    selectTegs.delete(evt.target.dataset.value2); // удалит из Set значение
  } else {
    selectTegs.add(evt.target.dataset.value2); // добавит в Set значение
  }
  console.log("selectTegs:", selectTegs);
}

// Патерн отслеживание кликов по элементам списка - фильтр - 2
//

////

//
// Мастерская колорпикер
// https://youtu.be/vnSnT-Uo8JI?t=3621

const colors = [
  { hex: "#955014", rgb: "149,80,20" },
  { hex: "#3a7d44", rgb: "58,125,68" },
  { hex: "#b18ab1", rgb: "177,138,177" },
  { hex: "#56b8de", rgb: "86,184,222" },
  { hex: "#ea9292", rgb: "234,146,146" },
  { hex: "#f7c330", rgb: "247,195,48" },
  { hex: "#a8e6cf", rgb: "168,230,207" },
  { hex: "#d3b683", rgb: "211,182,131" },
  { hex: "#7d849d", rgb: "125,132,157" },
  { hex: "#4b4e6d", rgb: "75,78,109" }
];

const palette = document.querySelector(".js-palette");

const markup = makeMarkup(colors);
palette.insertAdjacentHTML("beforeend", markup);

function makeMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
      <div
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
      ></div>
      <div class="color-meta">
        <p class="color-name">HEX: ${hex}</p>
        <p class="color-name">RGB: ${rgb}</p>
      </div>
    </div>
    `;
    })
    .join("");
}

palette.addEventListener("click", onContainerClick);

function onContainerClick(e) {
  if (!e.target.classList.contains("color-swatch")) {
    return;
  }

  removeActive();
  addClassOnCard(e);
  setBgColor(e.target.dataset.hex);
}

function removeActive() {
  const currentActiveCard = document.querySelector(".color-card.active-card");

  if (currentActiveCard) {
    currentActiveCard.classList.remove("active-card");
  }
}

function setBgColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function addClassOnCard(e) {
  const chosedCard = e.target.closest(".color-card");
  chosedCard.classList.add("active-card");
}

// Мастерская колорпикер
//

////

//
// Closest()
// https://youtu.be/vnSnT-Uo8JI?t=4761

const one = document.querySelector(".one");

one.addEventListener("click", evt => {
  console.log("evt", evt.target.closest(".one"));
});

// Closest()
//
