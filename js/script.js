//console.log("I am working!");

// IIFE

(function () {
  // the main class
  class Main {
    // constructor
    constructor() {
      // properties
    }
  }

  // Instantiates the main class
  new Main();

  // employee class
  class Employee {
    // constructor
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.Pay = 0;
    }
  }

  //part time class
  // child class
  class PartTime extends Employee {
    // constructor
    constructor(name, age, payRate, hours) {
      // super taken from employee
      super(name, age);
      this.payRate = payrate;
      this.hours = hours;
      this.employeeType = "Part-Time";
      this.calculatePartTimePay();
    }

    // claculated Pay function for part time employees
    calculatePartTimePay() {
      this.salary = this.payRate * this.hours * 52;
    }
  }

  //managers
  // child of employee class
  class Managers extends Employee {
    constructor(name, age, payRate, hours) {
      super(name, age);
      this.payRate = payRate;
      this.hours = hours;
      this.employeeType = "Manager";
      this.calculateManagersPay();
    }
    calculateManagersPay() {
      // - 1000 FOR INSURANCE
      this.salary = this.PayRate * this.hours * 52 - 1000;
    }
  }

  // end of IIFE
})();
