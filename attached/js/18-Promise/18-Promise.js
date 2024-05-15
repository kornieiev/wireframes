//
// Promise - примеры кода из конспекта

// Change value of isSuccess variable to call resolve or reject
const isSuccess = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});
console.log(promise);

promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log("Finnaly result"));

//

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango")
  .then(user => console.log(user))
  .catch(error => console.error(error));

//

const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

  return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));

// Promise - примеры кода из конспекта
//

////
////

//
