"use strict";

// constructor
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// inhereting
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// //////////////////////////////////////////////////////////

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // instance methods
  // methods that we write outside the constructor will be on the prototype of the object not on the object itself just like .protype inheritence
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log("Hey there ✌");
    console.log(this);
  }
}
const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica.age);
PersonCl.hey();
// console.log(jessica);
// jessica.calcAge();

// we can do this, or call it directly in side the class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// 1. classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

// ///////////////////////////////////////

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// /////////////////////////////////////////////////////

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Sicence");
