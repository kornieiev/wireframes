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
