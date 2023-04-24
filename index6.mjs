//
//
//.......ES6 Module Exports...
//.......Default Modules......
//

//
//.........Exporting a variable while defining.....

// import value from "./sample6.mjs";
// console.log(value);

//
//..........Exporting a variable after defining....

// import a from "./sample6.mjs";
// console.log(a);

//
//........Exporting a value or an expression...
// import result from "./sample6.mjs";
// console.log(result);

//
//........Exporting a function while a defining...
// import sum from "./sample6.mjs";
// console.log(sum(2, 6));

//
//......Exporting a function after defining...
// import sum from "./sample6.mjs";
// console.log(sum(2, 6));

//......Exporting a class while defining...
// import StudentDetails from "./sample6.mjs";

// const newStudentDetails = new StudentDetails("Ram", 28);
// console.log(newStudentDetails);

//
//...........Exporting a while after defining..
// import StudentDetails from "./sample6.mjs";

// let studentDetails = new StudentDetails("Ram", 28);
// console.log(studentDetails);

//
//
//
//.......ES6 Module Exports...
//.......Named Exports Modules......
//

//
//.....Exporting multiple variables while defining...
// import { value, studentName } from "./sample6.mjs";
// console.log(value);
// console.log(studentName);

//
//....Exporting multiple variable after defining...
// import { value, studentName } from "./sample6.mjs";
// console.log(value);
// console.log(studentName);

//
//..............Exporting multiple function while defining......
// import { sum, sub } from "./sample6.mjs";
// console.log(sum(2, 0));
// console.log(sub(9, 3));

//
//..........Exporting multiple functions after defining....
// import { sum, sub } from "./sample6.mjs";
// console.log(sum(1, 7));
// console.log(sub(10, 100));

//
//...........Exporting multiple classes while defining.....
// import { StudentDetails, CarDetails } from "./sample6.mjs";
// const studentDetailsnew = new StudentDetails("Ram", 28);
// console.log(studentDetailsnew);

// const carDetails = new CarDetails("jeep compass", "300 kmp/h");
// console.log(carDetails);

//
//........Exporting multiple classes after defining.....
import { StudentDetails, CarDetails } from "./sample6.mjs";
let studentDetails = new StudentDetails("Ram Sai", 28);
console.log(studentDetails);

let carDetails = new CarDetails("Jeep Compass", "300 kmp/h");
console.log(carDetails);
