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
//
