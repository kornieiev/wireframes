//
// Тест

const form = document.querySelector(".form");

form.addEventListener("submit", onSubmitClick);

const LOG = "T.Kornieiev@uczen.eduwarszawa.pl";
const PASS = "TimaUK123";

function onSubmitClick(evt) {
  evt.preventDefault();

  const loginValue = evt.target.elements.login.value;
  const password = evt.target.elements.password.value;

  if (loginValue !== LOG || password !== PASS) {
    form.classList.add("error");

    alert("Не вірний пароль, або логін! Спробуй ще!");
    form.reset();
    return;
  }
  form.classList.add("ok");
  alert(`Привіт ${loginValue}! Вітаю тебе у системі!`);
}

// Тест

////

//
