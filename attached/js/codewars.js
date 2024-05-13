// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// console.log(descendingOrder(0));
// console.log(descendingOrder(123456789));
// console.log(descendingOrder(1021));

// =================================================================

// Number of People in the Bus

var number = function (busStops) {
  let inPass = 0;
  let outPass = 0;

  busStops.map(stop => {
    inPass += stop[0];
    outPass += stop[1];
  });

  // console.log("result:", inPass - outPass);
  return inPass - outPass;
};

number([
  [10, 0],
  [3, 5],
  [5, 8]
]); // 5

number([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10]
]); // 17

number([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8]
]); // 21

number([[0, 0]]); // 0

// =================================================================

// Is this a triangle?

function isTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
}

// isTriangle(1, 2, 2); //true
// isTriangle(7, 2, 2); //false

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));
// console.log(isTriangle(5, -1, 0));

// =================================================================

// String ends with?

function solution(str, ending) {
  // if (ending === "") {
  //   return true;
  // }
  // const newEnding = ending.split("").length;
  // return str.split("").slice(-newEnding).join("") === ending;

  return str.endsWith(ending);
}

// console.log(solution("abcde", "cde"));
// console.log(solution("abcde", "abc"));
// console.log(solution("abc", ""));

// =================================================================

// Stop gninnipS My sdroW!

function spinWords(string) {
  let newStr = [];
  string.split(" ").map(word => {
    if (word.length >= 5) {
      const newW = word.split("").reverse().join("");
      newStr.push(newW);
      return;
    }
    newStr.push(word);
  });

  console.log("newStr", newStr.join(" "));
  return newStr.join(" ");
}

spinWords("Welcome"); // "emocleW"
spinWords("Hey fellow warriors"); // "Hey wollef sroirraw"
spinWords("This is a test"); // "This is a test"
spinWords("This is another test"); // "This is rehtona test"
spinWords("You are almost to the last test"); // "You are tsomla to the last test"
spinWords("Just kidding there is still one more"); // "Just gniddik ereht is llits one more"
spinWords("Seriously this is the last one"); // "ylsuoireS this is the last one"
