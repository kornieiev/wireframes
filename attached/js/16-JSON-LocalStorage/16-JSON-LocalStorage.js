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
