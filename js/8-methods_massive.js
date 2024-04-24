// ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ МАССИВА

const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] }
];

const allCourses = students.flatMap(student => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log("allCourses", allCourses);

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

console.log("uniqueCourses", uniqueCourses);

console.log("=====================");

const uniqueCourses2 = allCourses.filter((course, index, array) => {
  // console.log("course", course);
  console.log("index", index);
  // console.log("array", array);

  array.indexOf(course) === index;
  console.log("array.indexOf(course)", array.indexOf(course));
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
