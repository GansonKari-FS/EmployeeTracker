//console.log("I am working!");

// IIFE

(function () {
 
    // the main class
 class MainClass {
 // constructor
  constructor() {
  // empty array for employees 
  this.employees = [];

 // employees, the type and hours they worked
 this.employees.push(new PartTime("Jennifer Sanders", 25, 15, 10));
 this.employees.push(new PartTime("Sally Johnson", 33, 12, 10));
 this.employees.push(new PartTime("Jeff Ganson", 30, 17, 16));
 this.employees.push(new Managers("Steve Thibodeaux", 40, 20, 15));
this.employees.push(new Managers("Brooke Barker", 20, 20, 15));

this.displayEmployees();
 this.menu();
 
}

 // display employees information in console
 displayEmployees() {
 console.log("Employees Tracker");
 console.log("ID\tName\tSalary\tHours\tPayRate\tType");
  
 this.employees.forEach((emp, index) => {
  console.log( `${index + 1}\t${emp.salary}\t${emp.hours}\t${emppayRate}\t${emp.employeeType}`):
 });
}
  // add a new employee 
 addAEmployee() {
const input = prompt("To add an employee to the list enter their name, age, pay rate, hours worked seperated by commas here");

// fetch the name, age, payrate, and hours from input  
const [name,ageStr, payRateStr, hourStr] = input.split(",");
const age = parseInt(ageStr);
const payRate = parseFloat(payRateStr);
const hours = parseFloat(hoursStr);

  
 // add new employess and filter what type they are (part-time or managers) 
 let newEmployee;
   if(hours >= 40) {
    newEmployee = new Manager(name, age, payRate, hours);
   } else {
    newEmployee = new Parttime(name, age, payRate, hours);
   }

   this.employees.push(newEmployee);
   this.displayEmployees();
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
