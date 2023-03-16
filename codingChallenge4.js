"use strict";

// ///////////////////////////////////////////
// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classses: create an "EVCL" class of the "CarCL" class
2. Make the "charge" property private
3. Implement the ability to chain the "acccelerate" and "chargeBattery" methods of this class, and also update the "brake" method in the Car class. They experiment with chining!

DATA CAR 1: "Rivian" going at 120km/h, with a charge of 23%

Good Luck ✌

*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
