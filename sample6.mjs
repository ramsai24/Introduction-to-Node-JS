//
//
//
//.......ES6 Module Exports...
//.......Default Modules......
//

//
//.........Exporting a variable while defining.....

// export default let value = 5;

//
//........Exporting a variable after defining.

// let a = 5;
// export default a;

//
//.......Exporting a value an expression...
// export default 5 * 3;

//
//....Exporting a function while defining....
// export default function (num1, num2) {
//   return num1 + num2;
// }

//
//.........Exporting a function after defining.
// function sum(num1, num2) {
//   return num1 + num2;
// }

// export default sum;

//
//.........Exporting a class while defining..
// export default class StudentDetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

//
//............Exporting a class after defining...
// class StudentDetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// export default StudentDetails;

//
//
//
//.......ES6 Module Exports...
//.......Named Exports Modules......
//

//
//......Exporting mutiple variabels while defining....
// export let value = 2;
// export let studentName = "Ram Sai";

//
//...........Exporting multiple variables after defining....
// let value = 2;
// const studentName = "Ram Sai";

// export { value, studentName };

//
//.............Exporting multiple functions while defining....
// export function sum(num1, num2) {
//   return num1 + num2;
// }

// export function sub(num1, num2) {
//   return num1 - num2;
// }

//
//........Exporting multiple function after defining.........
// function sum(num1, num2) {
//   return num1 + num2;
// }

// function sub(num1, num2) {
//   return num1 - num2;
// }

// export { sum, sub };

//
// .............Exporting a multiple classes while defining.....
// export class StudentDetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// export class CarDetails {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
// }

//
//........Exporting multiple classes after defining....
class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class CarDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

export { StudentDetails, CarDetails };
