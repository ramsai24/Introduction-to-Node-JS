//
//
//...............Common JS Modules Exports...
//..................Default Exports...
//
//
// let value = require("./sample");
// console.log(value);

//.......Exporting a value or an expression
// let result = require("./sample");
// console.log(result);

//
//..........Exporting a fucntion while defining
// const sum = require("./sample");
// console.log(sum(2, 6));

//
//...........Exporting a function after defining
// const sum = require("./sample");
// console.log(sum(2, 5));

//
//..........Exporting a class while defining....
// const StudentDetails = require("./sample.js");
// let studentDetails = new StudentDetails("Ram", 28);
// console.log(studentDetails);
// console.log(studentDetails.name);
// console.log(studentDetails.age);

//
//.............Exporting a class after defining...
// const StudentDetails = require("./sample");
// const studentdetails = new StudentDetails("Ram", 28);
// console.log(studentdetails);
// console.log(studentdetails.name);
// console.log(studentdetails.age);

//
//
//...............Common JS Modules Exports...
//..................Named Exports...
//
//

//
//..........Exporting mutiple variables after defining
// const { value, studentName } = require("./sample.js");
// console.log(value);
// console.log(studentName);

//.
//............Exporting multiple values and expressions..
// const { sum, sub } = require("./sample.js");
// console.log(sum);
// console.log(sub);

//
//........Exporting multiple functions while defining
// const { sum, sub } = require("./sample.js");
// console.log(sum(2, 6));
// console.log(sub(2, 6));

//
//............Exporting multiple functions after defining..
// const { sum, sub } = require("./sample.js");
// console.log(sum(2, 7));
// console.log(sub(3, 5));

//
//..........Exporting multiple classes while defining....
// const { studentDetails, carDetails } = require("./sample.js");

// const StudentDetails = new studentDetails("Ram", 28);
// console.log(StudentDetails);
// console.log(StudentDetails.name);
// console.log(StudentDetails.age);

// const CarDetails = new carDetails("jeep", "200kmp/h");
// console.log(CarDetails);
// console.log(CarDetails.name);
// console.log(CarDetails.speed);

//....
//........Exporting multiple classes after defining..
const { studentDetails, carDetails } = require("./sample");

const studentObject = new studentDetails("Ram Sai", 28);
console.log(studentObject);
console.log(studentObject.name);
console.log(studentObject.age);

const carObject = new carDetails("jeep", "200 kmp/hr");
console.log(carObject);
console.log(carObject.name);
console.log(carObject.speed);
