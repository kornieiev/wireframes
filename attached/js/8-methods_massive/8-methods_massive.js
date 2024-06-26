// ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ МАССИВА

const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] }
];

const allCourses = students.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log("allCourses", allCourses);

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

// console.log("uniqueCourses", uniqueCourses);

// console.log("=====================");

const uniqueCourses2 = allCourses.filter((course, index, array) => {
  // console.log("index", index);

  array.indexOf(course) === index;
  // console.log("array.indexOf(course)", array.indexOf(course));
});

// "course"          indexOf    index
// 'математика'         0         0     ===
// 'фізика'             1         1     ===
// 'інформатика'        2         2     ===
// 'математика'         0         3     !==
// 'фізика'             1         4     !==
// 'біологія'           5         5     ===

// ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ МАССИВА
//

//
// Метод filter()

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students2 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 }
];

const best = students2.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

const worst = students2.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students2.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// Метод filter()
//

//
// Метод findIndex()

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" }
];

colorPickerOptions.findIndex(option => option.label === "blue"); // 2
colorPickerOptions.findIndex(option => option.label === "pink"); // 3
colorPickerOptions.findIndex(option => option.label === "white"); // -1

colorPickerOptions.findIndex(option => option.label === "blue"); // 2

const label =
  colorPickerOptions[
    colorPickerOptions.findIndex(option => option.label === "bluee")
  ]?.label;

const color =
  colorPickerOptions[
    colorPickerOptions.findIndex(option => option.label === "bluee")
  ]?.color;

// console.log(`${label}: ${color}`);

// Метод findIndex()
//

//
// Метод reduce()

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
];

let sum = tweets.reduce((total, like) => {
  return (total += like.likes);
}, 0);

// console.log("sum", sum);

// Метод reduce()
//

//
// Просунутий reduce()

const tweets2 = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
];

const getTags = tweets2 =>
  tweets2.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets2);
// console.log("tags", tags);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  // console.log("acc", acc);
  // console.log("tag", tag);

  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
// console.log(tagCount);

// Просунутий reduce()
//

//
// Метод sort()

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

const scores2 = [27, 2, 41, 4, 7, 3, 75];
const newScores2 = [...scores2].sort();
scores2.sort();
// console.log(scores2); // [2, 27, 3, 4, 41, 7, 75]
// console.log(newScores2); // [2, 27, 3, 4, 41, 7, 75]

// Метод sort()
//

//
// Метод localeCompare()

const students3 = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

const inAlphabetOrder = [...students3].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students3].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// Метод localeCompare()
//

//
// Сортування об'єктів

const students4 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 }
];

const inAscendingScoreOrder = students4.sort((firstStudent, secondStudent) => {
  return firstStudent.score - secondStudent.score;
});
// console.log("inAscendingScoreOrder", inAscendingScoreOrder);

// const inDescendingScoreOrder = students4.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log("inDescendingScoreOrder", inDescendingScoreOrder);

// const inAlphabeticalOrder = students4.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log("inAlphabeticalOrder", inAlphabeticalOrder);

// Сортування об'єктів
//
