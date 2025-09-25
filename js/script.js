//console.log("I am working!");

// IIFE

(function () {
  // the main class
  class Main {
    // constructor
    constructor() {
      this.employees = [];

      // the three tpyes of employees
      this.employees.push(new PartTime("Jennifer", 25, 15, 10));

      this.employees.push(new Managers("Steve", 40, 20, 15));

      this.employees.push(new PartTime("Jeff", 30, 17, 16));

      // display employees
      this.displayEmployees();

      // function
      this.menu();
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

   showEmployees() {
      console.log("Employees Tracker Assignmanet 4.4 By Kari Ganson");
      //   maybe add something here

      this.employees.forEach((emp, index) => {
        console.log(
          `${index + 1}\t${emp.salary}\t${emp.hours}\t${emp.payRate}\t${
            emp.employeeType
          }`
        );
      });
    }
  }

    showEmployees() {
      console.log("Employees Tracker Assignmanet 4.4 By Kari Ganson");
      //   maybe add something here

      this.employees.forEach((emp, index) => {
        console.log(
          `${index + 1}\t${emp.salary}\t${emp.hours}\t${emp.payRate}\t${
            emp.employeeType
          }`
        );
      });
    }
  

  addEmployee(){
    const input = prompt("Enter the employee you whant to adds name, age, pay rate, hours worked here to add them to the list seperated by commas");

    const [name, payRateStr, hourStr] = input.split(",");
    const age = parsent(ageStr);
    const payRate = parseFloat(payRateStr);
    const hours = parseFloat(hoursStr);


    // add new employess and filter what type they are (part-time or managers)
   let newEmployees;
   if(hours >= 40) {
    newEmployees = new Manager(name, age, payRate, hours);
   }else {
    newEmployees = new Parttime(name, age, payRate, hours);
   }

   this.employees.push(newEmployees);
   this.displayEmployees();



  }


    removeEmployhee() {
        const input = prompt("What Employee Would You Like to Remove From The List?");
        const id = parseInt(input);
        if (!NaN(id)) {(
            this.employees.splice(id - 1, 1);
        } else {
            this.employees.this.employees.filter(emp => emp.name.toLower)
        }
    }

 

  // end of IIFE
})();
