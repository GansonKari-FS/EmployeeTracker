(function () {
  window.onload = function () {
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
      constructor(name, age, pay, hrs) {
        super(name, age);
        this.pay = pay;
        this.hrs = hrs;
        this.employeeType = "Part-Time";
        this.calculatePay();
      }

      calculatePay() {
        this.salary = this.pay * this.hrs * 52;
      }
    }

    // Manager class
    class Manager extends Employee {
      constructor(name, age, pay, hrs) {
        super(name, age);
        this.pay = pay;
        this.hrs = hrs;
        this.employeeType = "Manager";
        this.calculatePay();
      }

      calculatePay() {
        this.salary = this.pay * this.hrs * 52 - 1000; // insurance deduction
      }
    }

    // Main application class
    class Main {
      constructor() {
        this.employees = [];
        this.loadFromStorage();

        if (this.employees.length === 0) {
          // Initialize with default employees
          this.employees.push(new PartTime("Jennifer Sanders", 25));
          this.employees.push(new PartTime("Sally Johnson", 33));
          this.employees.push(new PartTime("Jeff Ganson", 30));
          this.saveToStorage();
        }

        this.displayEmployees();
        this.menu();

        setTimeout(() => {
          this.menu();
        }, 500);
      }

      loadFromStorage() {
        const saved = localStorage.getItem("employees");
        if (saved) {
          const raw = JSON.parse(saved);
          this.employees = raw.map((emp) =>
            emp.employeeType === "Manager"
              ? new Manager(emp.name, emp.age, emp.pay, emp.hrs)
              : new PartTime(emp.name, emp.age, emp.pay, emp.hrs)
          );
        }
      }

      saveToStorage() {
        localStorage.setItem("employees", JSON.stringify(this.employees));
      }

      displayEmployees() {
        console.clear();
        console.log("Employees Tracker");
        console.log("ID\tName\t\t\tSalary\t\tHours\tPayRate\tType");
        this.employees.forEach((emp, index) => {
          console.log(
            `${index + 1}\t${emp.name.padEnd(20)}\t${emp.salary.toFixed(2)}\t${
              emp.hrs
            }\t${emp.pay}\t${emp.employeeType}`
          );
        });
      }

      addEmployee() {
        const input = prompt(
          "To add an employee, enter the emplyee's: name, age, pay rate, hours worked (separated by commas)"
        );
        if (!input) return this.menu();

        const [name, ageStr, payStr, hrsStr] = input.split(",");
        const nameTrimmed = name.trim();
        const age = parseInt(ageStr.trim());
        const pay = parseFloat(payStr.trim());
        const hrs = parseFloat(hrsStr.trim());

        if (!nameTrimmed || isNaN(age) || isNaN(pay) || isNaN(hrs)) {
          alert("Invalid input, please try again.");
          return this.menu();
        }

        const newEmp =
          hrs >= 40
            ? new Manager(nameTrimmed, age, pay, hrs)
            : new PartTime(nameTrimmed, age, pay, hrs);

        this.employees.push(newEmp);
        this.saveToStorage();
        alert("Employee added successfully.");
        this.displayEmployees();
        this.menu();
      }

      removeEmployee() {
        const input = prompt("Enter employee ID or Name to remove:");
        if (!input) return this.menu();

        let indexToRemove = -1;
        const idNum = parseInt(input);
        if (!isNaN(idNum)) {
          if (idNum > 0 && idNum <= this.employees.length) {
            indexToRemove = idNum - 1;
          }
        } else {
          indexToRemove = this.employees.findIndex(
            (emp) => emp.name.toLowerCase() === input.toLowerCase()
          );
        }

        if (indexToRemove >= 0) {
          this.employees.splice(indexToRemove, 1);
          this.saveToStorage();
          alert("Employee successfully removed.");
        } else {
          alert("Employee not found. Please try again.");
        }
        this.displayEmployees();
        this.menu();
      }

      menu() {
        const choice = prompt(
          "What would you like to do? :\n1: Display Employees\n2: Add an Employee\n3: Remove Employee\n4: Exit"
        );
        switch (choice) {
          case "1":
            this.displayEmployees();
            break;
          case "2":
            this.addEmployee();
            break;
          case "3":
            this.removeEmployee();
            break;
          case "4":
            console.log("Goodbye!");
            return; // Exit the menu
          default:
            alert("Invalid choice. Please try again.");
            this.menu();
        }
      }

      // close Main class
    }

    // instantiate the application
    new Main();

    // close window.onload
  };

  // close IIFE
})();
