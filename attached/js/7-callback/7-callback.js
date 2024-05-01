function processCall(recipient, onAvailable, onNotAvailable) {
  console.log("recipient:", recipient);
  console.log("onAvailable:", onAvailable);
  console.log("onNotAvailable:", onNotAvailable);

  // Імітуємо доступність абонента випадковим числом
  // const isRecipientAvailable = Math.random() > 0.5;
  const isRecipientAvailable = true;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Полі", takeCall, leaveHoloMessage);
