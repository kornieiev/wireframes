//
// Навігація по DOM

// console.log("document:", document);

// const body = document.body;
// console.log("body", body);

// const list = document.querySelector(".list");
// console.log("list", list);

// const firstListItem = list.firstElementChild;
// console.log("firstListItem", firstListItem);

// const lastListItem = list.lastElementChild;
// console.log("lastListItem", lastListItem);

// const listItems = list.children;
// console.log("listItems", listItems);

// Навігація по DOM
//

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// listWithId.style.listStyle = "none";
// console.log("listWithId", listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log("listWithClass", listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log("menuItemsByTagName", menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log("menuItemsByClass", menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log("firstMenuItem", firstMenuItem);

//
//

// const link = document.querySelector(".myLink");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

//
//

const button = document.querySelector(".btn");
// console.log(button.attributes);

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

//
//

const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn);
// console.log(saveBtn.dataset);
// console.log(saveBtn.dataset.action);

//
//

const article = document.querySelector(".article");
// console.log("🚀 ~ article:", article.innerHTML);

const title = document.querySelector(".article .title");
// console.log("🚀 ~ title:", title.innerHTML);

title.innerHTML = 'New <span class="accent">title</span>';

//
//

// Создает и добавляет разметку
// https://youtu.be/w9gWey_cFgo?t=4437

const navItemEl = document.createElement("li");
navItemEl.classList.add("some-class");
console.log(navItemEl);

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("some-other-class");
navLinkEl.textContent = "Random text";
navLinkEl.href = "/some-link";
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);

console.log(navItemEl);

const navEl = document.querySelector(".text");
navEl.appendChild(navItemEl);

//

const mainDiv = document.createElement("div");

const div1 = document.createElement("div");
div1.textContent = "div1";

const div2 = document.createElement("div");
div2.textContent = "div2";

mainDiv.append(div1, div2);

navEl.append(mainDiv);

//
//

// Создаёт коллекцию элементов

const colorPickerOptions = [
  { label: "red", color: "red" },
  { label: "green", color: "green" },
  { label: "blue", color: "blue" },
  { label: "grey", color: "grey" },
  { label: "pink", color: "pink" },
  { label: "indigo", color: "indigo" }
];

const markup = colorPickerOptions.map(el => {
  const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.classList.add("classList");
  buttonEl.textContent = el.label;
  buttonEl.style.backgroundColor = el.color;

  return buttonEl;
});

console.log("markup", markup);

mainDiv.append(...markup);

// const makeColorPickerOptions = options => {
//   return options.map(option => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.classList.add("classList");
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);

// mainDiv.append(...elements);

//
//

// incertAdjacentHTML

const data = [
  {
    id: "1",
    name: "lola",
    date: "20.12.2020",
    type: "admin",
    img: "https://randomwordgenerator.com/img/picture-generator/53e4d0444d5aad14f1dc8460962e33791c3ad6e04e507440722d72d5954ec2_640.jpg",
    alt: "img-1"
  },
  {
    id: "2",
    name: "leo",
    date: "01.02.2019",
    type: "owner",
    img: "https://randomwordgenerator.com/img/picture-generator/g551deffc804848ef502ae952865f6ebc70a2e9c5a3bed5ea709e14b159492ea3991a9a9fac8ca423c0655dbda70d6d33_640.jpg",
    alt: "img-2"
  },
  {
    id: "3",
    name: "kiwi",
    date: "03.06.2000",
    type: "user",
    img: "https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg",
    alt: "img-3"
  },
  {
    id: "4",
    name: "ajax",
    date: "24.06.1989",
    type: "user",
    img: "https://randomwordgenerator.com/img/picture-generator/57e8d34b4c5bae14f1dc8460962e33791c3ad6e04e50744172297bd59e4dc2_640.jpg",
    alt: "img-4"
  },
  {
    id: "5",
    name: "mango",
    date: "30.02.2001",
    type: "user",
    img: "https://randomwordgenerator.com/img/picture-generator/55e0dd4b4e57a414f1dc8460962e33791c3ad6e04e50744172297bd69545c7_640.jpg",
    alt: "img-5"
  }
];

const makeMarkupByData = data => {
  return data.map(
    el =>
      `<div data-key="${el.id}">
      <p>${el.name}</p>
      <p>${el.date}</p>
      <p>user type:${el.type}</p>
      <img src="${el.img}" alt="${el.alt}" width="200">
    </div>`
  );
};

const newMarkup = makeMarkupByData(data).join("");

console.log("newMarkup", newMarkup);

mainDiv.insertAdjacentHTML("afterbegin", newMarkup);
