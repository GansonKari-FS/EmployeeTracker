// IIFE
window.onload = function () {
  (function () {
    // Employee class
    // dad class
    class Employee {
      constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
      }
    }

    // Part-Time class
    // child class
    class PartTime extends Employee {
      constructor(name, age, payRate, hours) {
        // super
        super(name, age);
        this.payRate = payRate;
        this.hours = hours;
        this.employeeType = "Part-Time";
        this.calculateSalary();
      }

      // pay for part time employee
      calculateSalary() {
        this.salary = this.payRate * this.hours * 52;
      }
    }

    // Manager class
    class Manager extends Employee {
      constructor(name, age, payRate, hours) {
        // super
        super(name, age);
        this.payRate = payRate;
        this.hours = hours;
        this.employeeType = "Manager";
        this.calculateSalary();
      }

      calculateSalary() {
        this.salary = this.payRate * this.hours * 52 - 1000; // insurance deduction
      }
    }

    // Main application class
    class Main {
      // constructor
      constructor() {
        // empty array to add employees to
        this.employees = [];
        this.loadFromStorage();

        if (this.employees.length === 0) {
          // list of inital employees names
          this.employees.push(new PartTime("Jennifer Sanders", 25, 15, 10));
          this.employees.push(new PartTime("Sally Johnson", 33, 12, 10));
          this.employees.push(new PartTime("Jeff Ganson", 30, 17, 16));
          this.employees.push(new Manager("Steve Thibodeaux", 40, 20, 15));
          this.employees.push(new Manager("Brooke Barker", 20, 20, 15));
          this.saveToStorage();
        }

        // show employees
        this.displayEmployees();

        // delay the menu so console can show
        setTimeout(() => {
          // start the menu
          this.menu();
        }, 5000);
      }

      // delay page loading

      loadFromStorage() {
        const saved = localStorage.getItem("employees");
        if (saved) {
          const raw = JSON.parse(saved);
          this.employees = raw.map((emp) =>
            emp.employeeType === "Manager"
              ? new Manager(emp.name, emp.age, emp.payRate, emp.hours)
              : new PartTime(emp.name, emp.age, emp.payRate, emp.hours)
          );
        }
      }

      // save employees to list
      saveToStorage() {
        localStorage.setItem("employees", JSON.stringify(this.employees));
      }

      // Display employee list
      displayEmployees() {
        console.clear();
        console.log("Employees Tracker");
        console.log("ID\tName\t\t\tSalary\t\tHours\tPayRate\tType");

        // for each
        this.employees.forEach((emp, i) => {
          const id = i + 1;
          const name = emp.name.padEnd(20);
          const salary = emp.salary.toFixed(2);
          const hours = emp.hours;
          const payRate = emp.payRate;
          const type = emp.employeeType;

          console.log(
            `${id}\t${name}\t${salary}\t${hours}\t${payRate}\t${type}`
          );
        });
      }

      // Add a new employee to the lise
      addEmployee() {
        const input = prompt(
          "To add an employee to the list, enter: name, age, pay rate, hours worked (separated by commas)"
        );

        // if there is no input then restart the menu option
        if (!input) return this.menu();

        const [name, ageStr, payRateStr, hourStr] = input.split(",");
        const age = parseInt(ageStr);
        const payRate = parseFloat(payRateStr);
        const hours = parseFloat(hourStr);

        if (!name || isNaN(age) || isNaN(payRate) || isNaN(hours)) {
          alert("Something Is Missing From Your Information Try Again!");
          return this.menu();
        }

        //   // adds what time of new employee the new employee you are adding is
        let newEmployee;
        if (hours >= 40) {
          newEmployee = new Manager(name, age, payRate, hours);
        } else {
          newEmployee = new PartTime(name, age, payRate, hours);
        }

        //   // pushes new employess to list then displays them
        this.employees.push(newEmployee);
        this.saveToStorage();
        alert("New Employee Added");
        this.displayEmployees();
        this.menu();
      }

      // Remove an employee by ID
      removeEmployee() {
        const input = prompt(
          "Enter the ID of the employee to remove from the list"
        );
        const id = parseInt(input);

        if (!isNaN(id) && id > 0 && id <= this.employees.length) {
          this.employees.splice(id - 1, 1);
          this.saveToStorage();
          alert("Employee has been removed.");
          // this.displayEmployees();
        } else {
          console.log("Invalid ID Please Reenter The Employee Id.");
        }
        this.displayEmployees();
        this.menu();
      }

      // function that allows user to select from the menu
      menu() {
        const choice = prompt(
          "What would you like to do? :\n1: Display Employees\n2: Add an Employee\n3: Remove Employee\n4: Exit the Menu"
        );

        switch (choice) {
          case "1":
            this.displayEmployees();
            break;
          case "2":
            this.addEmployee();
            return;
          case "3":
            this.removeEmployee();
            return;
          case "4":
            console.log("Good Bye!");
            return;
        }

        // Loop back to the menu
        this.menu();
      }
    }

    // Start the app
    new Main();
  })();
};
