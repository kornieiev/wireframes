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

  // console.log("newStr", newStr.join(" "));
  return newStr.join(" ");
}

spinWords("Welcome"); // "emocleW"
spinWords("Hey fellow warriors"); // "Hey wollef sroirraw"
spinWords("This is a test"); // "This is a test"
spinWords("This is another test"); // "This is rehtona test"
spinWords("You are almost to the last test"); // "You are tsomla to the last test"
spinWords("Just kidding there is still one more"); // "Just gniddik ereht is llits one more"
spinWords("Seriously this is the last one"); // "ylsuoireS this is the last one"

// =================================================================

// Who likes it?

function likes(names) {
  if (names.length < 1) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// console.log(likes([])); // 'no one likes this';
// console.log(likes(["Peter"])); // 'Peter likes this';
// console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this';
// console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this';
// console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this';

// =================================================================

// Mumbling

function accum(s) {
  // const arr = s.split("");
  // let str = [];

  // for (let i = 0; i < arr.length; i++) {
  //   console.log("arr[i]", arr[i]);
  //   const s = arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i);
  //   str.push(s);
  // }
  // return str.join("-");

  return s
    .split("")
    .map((s, i) => {
      return s.toUpperCase() + s.toLowerCase().repeat(i);
    })
    .join("-");
}

// console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// console.log(accum("EvidjUnokmM")); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// console.log(accum("HbideVbxncC")); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"

// =================================================================

// Moving Zeros To The End

function moveZeros(arr) {
  const newArr = [];
  const newArr0 = [];

  // arr.map((el) => {
  //   if (el !== 0) {
  //     newArr.push(el);
  //   } else {
  //     newArr0.push(el);
  //   }
  // });

  arr.map(el => (el !== 0 ? newArr.push(el) : newArr0.push(el)));
  return [...newArr, ...newArr0];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];

// =================================================================

// Return masked string
function maskify(cc) {
  const newString = cc.split("");

  if (newString.length <= 4) {
    return cc;
  }

  const length = newString.length - 4;

  const notHide = newString.splice(length);

  let string = "";

  for (let i = 0; i < length; i++) {
    string += "#";
  }

  return string + notHide.join("");
}

maskify("4556364607935616");

// maskify("4556364607935616");
// maskify("1");
// maskify("11111");

// ============================================================

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(2)); //'Even'

// ============================================================

function solution(number) {
  let sum = 0;

  if (number < 0) {
    return sum;
  }
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10)); // 3, 5, 6, 9 // 23
