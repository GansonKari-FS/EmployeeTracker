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
      this.calculatedPay();
    }
   
    // claculated Pay function for part time employees
    calculatedPay() {
      this.salary = this.payRate * this.hours * 52;
    }
  }
  // end of IIFE
})();
