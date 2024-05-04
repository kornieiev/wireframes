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

submitForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();

  console.log("evt.currentTarget.elements", evt.currentTarget.elements); // !!! даст доступ к массиву вложенных элементов в форме. Где потом можно посмотреть value эллемента

  const form = evt.currentTarget.elements;

  const email = form.email.value;
  const password = form.password.value;
  const subscription = form.subscription.value;

  console.log("email", email); // qwe@qwe.qwe
  console.log("password", password); // qweqwe
  console.log("subscription", subscription); //pro
}
// Событие сабмита формы
//

////

//
// Событие сабмита формы с использованием formData

const formDataForm = document.querySelector(".submit-form");

formDataForm.addEventListener("submit", onFormSubmit);

let data = [];

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);

  console.log("formData", formData); // пустой объект

  formData.forEach((value, name) => {
    console.log("value:", value);
    console.log("name:", name);
    data.push({ name: value });
  });
  console.log("data", data);
}

// Событие сабмита формы с использованием formData
//

////

//
// Disabled button when input:checkbox - !checked

const refs = {
  checkboxInput: document.querySelector(".checkbox-input"),
  checkboxBtn: document.querySelector(".checkbox-btn"),
  btnStatus: document.querySelector(".btn-status")
};

refs.checkboxInput.addEventListener("change", evt => {
  refs.checkboxBtn.disabled;
  evt.currentTarget.checked
    ? (refs.btnStatus.textContent = "Enabled") &&
      (refs.checkboxBtn.disabled = false)
    : (refs.btnStatus.textContent = "Disabled") &&
      (refs.checkboxBtn.disabled = true);
});

// Disabled button when input:checkbox - !checked
//

////

//
// События клавиатуры

const refs2 = {
  clearBtn: document.querySelector(".js-clear"),
  output: document.querySelector(".js-output")
};
// console.log("first", refs2.output.currentTarget);

document.addEventListener("keydown", evt => {
  console.log("evt", evt);
  console.log("evt", evt.code);
  console.log("evt", evt.key);
  console.log("evt", evt.key);

  refs2.output.textContent += evt.key;
});

refs2.clearBtn.addEventListener("click", evt => {
  refs2.output.textContent = "";
});

// События клавиатуры
//

////

//
// Событие мышки - mouseenter / mouseleave

const outer = document.querySelector(".outcide");
const inner = document.querySelector(".incide");

outer.addEventListener("mouseenter", () => {
  outer.classList.add("active-outer");
});
outer.addEventListener("mouseleave", () => {
  outer.classList.remove("active-outer");
});
