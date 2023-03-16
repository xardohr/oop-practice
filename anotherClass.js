"use strict";

// 1- Public fields
// 2- Private fields
// 3- Public methods
// 4- Private methods

class Account {
  // 1- Public fields (instances)
  local = navigator.language;

  // 2- private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // underscore to point out that it is supposed to be protected Data that shouldnt be manipulated outside the class
    this.#pin = pin;
  }

  //   3- Public methods
  getMovements() {
    return this.#movements;
  }

  deposite(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposite(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  //   4- Private methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposite(250);
acc1.withdraw(140);
