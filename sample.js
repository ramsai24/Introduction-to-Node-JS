//
//
//...............Common JS Modules Exports...
//..................Default Exports...
//
//
// let value = 5;
// module.exports = value;

//
//.......Exporting a value or an expression

// module.exports = 5 * 3;

//
//..........Exporting a fucntion while defining
// module.exports = function (num1, num2) {
//   return num1 + num2;
// };

//
//...........Exporting a function after defining
// function sum(num1, num2) {
//   return num1 + num2;
// }
// module.exports = sum;

//
//.........Exporting a class while defining......
// module.exports = class Studendetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };

//
//.........Exporting a class after defining...........
// class StudentDetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// module.exports = StudentDetails;

//
//
//...............Common JS Modules Exports...
//..................Named Exports...
//
//

//
//.............Exporting multiple variables after defining..
// let value = 5;
// exports.value = value;

// let studentName = "Ram Sai";
// exports.studentName = studentName;

//
//.........Exporting multiple values and expressions....
// let value = 2;
// exports.sum = 2 + 3;
// exports.sub = 2 - value;

//
//........Exporting multiple functions while defining
// exports.sum = function (num1, num2) {
//   return num1 + num2;
// };

// exports.sub = function (num1, num2) {
//   return num1 - num2;
// };

//
//............. Exporting mutiple functions after defining.
// function sum(num1, num2) {
//   return num1 + num2;
// }
// exports.sum = sum;
// function sub(num1, num2) {
//   return num1 - num2;
// }
// exports.sub = sub;

//
//...........Exporting multiple classes while defining.....
// exports.studentDetails = class StudentDetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };

// exports.carDetails = class CarDetails {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
// };

//.
//....Exporting multiple classes after defining
class StudentDetails {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
}
exports.studentDetails = StudentDetails;

class CarDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}
exports.carDetails = CarDetails;
