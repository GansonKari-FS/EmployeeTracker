// IIFE
(function () {
  // Employee class
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
    }
  }

  // Part-Time class
  class PartTime extends Employee {
    constructor(name, age, payRate, hours) {
      super(name, age);
      this.payRate = payRate;
      this.hours = hours;
      this.employeeType = "Part-Time";
      this.calculatePartTimePay();
    }

    // pay for part time employee
    calculatePartTimePay() {
      this.salary = this.payRate * this.hours * 52;
    }
  }

  // Manager class
  class Manager extends Employee {
    constructor(name, age, payRate, hours) {
      super(name, age);
      this.payRate = payRate;
      this.hours = hours;
      this.employeeType = "Manager";
      this.calculateManagerPay();
    }

    calculateManagerPay() {
      this.salary = this.payRate * this.hours * 52 - 1000; // insurance deduction
    }
  }

  // Main application class
  class Main {
    // constructor
    constructor() {
      // empty array to add employees to
      this.employees = [];

      // employees names list
      this.employees.push(new PartTime("Jennifer Sanders", 25, 15, 10));
      this.employees.push(new PartTime("Sally Johnson", 33, 12, 10));
      this.employees.push(new PartTime("Jeff Ganson", 30, 17, 16));
      this.employees.push(new Manager("Steve Thibodeaux", 40, 20, 15));
      this.employees.push(new Manager("Brooke Barker", 20, 20, 15));

      // call
      this.displayEmployees();
      this.menu();
    }

    // Display employee list
    displayEmployees() {
      console.log("Employees Tracker");
      console.log("ID\tName\t\t\tSalary\t\tHours\tPayRate\tType");

      // for each
      this.employees.forEach((emp, index) => {
        console.log(
          `${index + 1}\t${emp.name}\t${emp.salary.toFixed(2)}\t${emp.hours}\t${
            emp.payRate
          }\t${emp.employeeType}`
        );
      });
    }

    // Add a new employee to the lise
    addEmployee() {
      const input = prompt(
        "To add an employee, enter: name, age, pay rate, hours worked (separated by commas)"
      );

      const [name, ageStr, payRateStr, hourStr] = input.split(",");
      const age = parseInt(ageStr);
      const payRate = parseFloat(payRateStr);
      const hours = parseFloat(hourStr);

      // adds what time of new employee the new employee you are adding is
      let newEmployee;
      if (hours >= 40) {
        newEmployee = new Manager(name, age, payRate, hours);
      } else {
        newEmployee = new PartTime(name, age, payRate, hours);
      }

      // pushes new employess to list then displays them
      this.employees.push(newEmployee);
      this.displayEmployees();
    }

    // Remove an employee by ID
    removeEmployee() {
      const input = prompt("Enter the ID of the employee to remove:");
      const id = parseInt(input);

      if (!isNaN(id) && id > 0 && id <= this.employees.length) {
        this.employees.splice(id - 1, 1);
        console.log("Employee has been removed.");
        this.displayEmployees();
      } else {
        console.log("Invalid ID.");
      }
    }

    // function that allows user to select from the menu
    menu() {
      const choice = prompt(
        "Choose an option:\n1: Add New Employee\n2: Remove an Employee\n3: Show Employees\n4: Exit Menu"
      );

      switch (choice) {
        case "1":
          this.addEmployee();
          break;
        case "2":
          this.removeEmployee();
          break;
        case "3":
          this.displayEmployees();
          break;
        case "4":
          console.log("Thank you!");
          return;
        default:
          console.log("Invalid option.");
      }

      // Loop back to the menu
      this.menu();
    }
  }

  // Start the app
  new Main();
})();
