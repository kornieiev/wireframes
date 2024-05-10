//
// JSON - примеры кода из конспекта

// Script will crash during parse
// const data = JSON.parse('{ "text": "Well, this is awkward" }');
// console.log("❌ You won't see this log");

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
//   console.log("stack:", error.stack);
// }

//

// try {
//   console.log("This message will not appear in the console");

//   const value = 5;
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // "Unexpected token u in JSON at position 1"
// }

// console.log("✅ This is fine, we handled parse error in try...catch");

// JSON - примеры кода из конспекта
//

///
///

//
// JSON

// Object => JSON
const obj = {
  name: "Lola",
  age: 22,
  student: true,
  skills: [{ english: "b2" }, { react: true }]
};

const lola = JSON.stringify(obj);
// console.log("lola", lola);

//

// JSON => Object
const lolaJs = JSON.parse(lola);
// console.log("lolaJs", lolaJs);

// JSON
//

////
////

//
// LocalStorage
// https://youtu.be/w8vKiU0Hhts?t=327

// запись в LS
localStorage.setItem("lola-data", lola);

// console.log("localStorage", localStorage.getItem);
// console.log("localStorage", localStorage.length);

// чтение из LS
const jsonFromLS = localStorage.getItem("lola-data");
// console.log("jsonFromLS", jsonFromLS);

const parsedDataFromLS = JSON.parse(jsonFromLS);
// console.log("parsedDataFromLS:", parsedDataFromLS);

// LocalStorage
//

////
////

//
// Форма отзывов
// https://youtu.be/w8vKiU0Hhts?t=920

const STORAGE_KEY = "textarea";

const formData = {};

const refs = {
  form: document.querySelector(".js-form"),
  textarea: document.querySelector(".js-form textarea")
};

refs.form.addEventListener("submit", onSubmitClick);
refs.textarea.addEventListener("input", onTextareaInput);

refs.form.addEventListener("input", evt => {
  const name = evt.target.name;
  const value = evt.target.value;

  console.log(name, value);

  formData[name] = value;
  console.log("🚀 ~ formData:", formData);

  localStorage.setItem("enteredData", JSON.stringify(formData));
});

function populateLSData() {
  const textFromLS = localStorage.getItem(STORAGE_KEY);
  if (textFromLS) {
    refs.textarea.value = textFromLS;
  }
}

populateLSData();

function onTextareaInput(evt) {
  const text = evt.target.value;

  localStorage.setItem(STORAGE_KEY, text);
}

function onSubmitClick(evt) {
  evt.preventDefault();

  const name = evt.target.elements.name.value;
  const message = evt.target.elements.textarea.value;

  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
}
