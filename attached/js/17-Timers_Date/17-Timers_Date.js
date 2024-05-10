//
// setInterval - clearInterval

const loger = (text, intervalTime) => {
  console.log(`${text}! intervalTima=${intervalTime} - ${Date.now()}`);
};
const intervalTime = 3000;

setInterval(loger, 2000, "hello", intervalTime);

const startInterval = setInterval(loger, 2000, "start", intervalTime);

//

const stopInteval = Math.random() > 0.3;
console.log("stopInteval", stopInteval);
if (stopInteval) {
  clearInterval(startInterval);
}

// setInterval - clearInterval
//

///
///
