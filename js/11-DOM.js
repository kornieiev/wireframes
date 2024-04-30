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

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

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
console.log("🚀 ~ article:", article.innerHTML);

const title = document.querySelector(".article .title");
console.log("🚀 ~ title:", title.innerHTML);

title.innerHTML = 'New <span class="accent">title</span>';

//
//
