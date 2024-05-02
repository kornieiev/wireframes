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

// Подія submit
//

////

//
// Подія change

const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");
const selector = document.querySelector(".pizza-select");

selector.addEventListener("change", handleChange);

function handleChange(evt) {
  const idx = evt.target.selectedIndex;
  valueOutput.textContent = evt.target.value;
  textOutput.textContent = evt.target.options[idx].text;
}

// Подія change
//

////

//
// Подія input

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", inputChange);

function inputChange(evt) {
  output.textContent = evt.currentTarget.value;
}

// Подія input
//

////

//
// Подія focus і blur

const addFocus = document.querySelector('[data-action="add"]');
const removeFocus = document.querySelector('[data-action="remove"]');
const textInputFocus = document.querySelector(".text-input-focus");

addFocus.addEventListener("click", () => {
  textInputFocus.focus();
  textInputFocus.value = "This input has focus";
});

removeFocus.addEventListener("click", () => {
  textInputFocus.blur();
  textInputFocus.value = "";
});

// Подія focus і blur
//

////

////

////

//// ========== РЕПЕТА ========== \\\\

// Событие сабмита формы

const submitForm = document.querySelector(".submit-form");
console.log("submitForm", submitForm);

submitForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log("evt t", evt.target);
  console.log("evt el", evt);

  const form = evt.target;
  console.log("form", form.elements);
}

// stoped here:
// https://youtu.be/iAAtYwGp_II?t=1443
