//
// Метод addEventListener()
const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================

const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("first Callback");
};

const secondCallback = () => {
  console.log("second Callback");
};

const thirdCallback = () => {
  console.log("third Callback");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

// Метод addEventListener()
//

////

//
// Метод removeEventListener()

const addListener = document.querySelector(".js-add");
const removeListener = document.querySelector(".js-remove");
const targetListener = document.querySelector(".target-btn");

const handleClick2 = () => {
  console.log("listener works");
};

addListener.addEventListener("click", () => {
  console.log("listener added on 'Click me' button");
  targetListener.addEventListener("click", handleClick2);
});

removeListener.addEventListener("click", () => {
  console.log("listener removed from 'Click me' button");
  targetListener.removeEventListener("click", handleClick2);
});

// Метод removeEventListener()
//

////

//
// Параметр event

const eventBtn = document.querySelector(".event-btn");

eventBtn.addEventListener("click", event => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  // console.log("event.currentTarget", event.currentTarget);
});

// Параметр event
//

////

//
// Подія submit

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  console.log("event", event);

  const form = event.target;
  console.log("form", form);

  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return console.log("Не введены все нужные данные");
  }
  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}
