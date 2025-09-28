(function () {
  window.onload = function () {
    // Employee class
    class Employee {
      constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
      }
      calculateSalary() {
        // claculate salary
      }
    }

    // Part-Time employee class
    class PartTime extends Employee {
      constructor(name, age, pay, hrs) {
        super(name, age);
        this.pay = pay;
        this.hrs = hrs;
        this.employeeType = "Part-Time";
        this.calculateSalary();
      }
      calculateSalary() {
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
        this.calculateSalary();
      }
      calculateSalary() {
        this.salary = this.pay * this.hrs * 52 - 1000; // insurance deduction
      }
    }

    // Main class
    class Main {
      constructor() {
        this.employees = [];
        this.loadFromStorage();

        if (this.employees.length === 0) {
          // Load some default employees
          this.employees.push(new PartTime("Jennifer Sanders", 25, 15, 10));
          this.employees.push(new PartTime("Sally Johnson", 33, 12, 10));
          this.employees.push(new PartTime("Jeff Ganson", 30, 17, 16));
          this.employees.push(new Manager("Steve Thibodeaux", 40, 20, 15));
          this.employees.push(new Manager("Brooke Barker", 20, 20, 15));
          this.saveToStorage();
        }

        this.displayEmployees();

        // slows the loading time for the menu
        setTimeout(() => this.menu(), 5000);
      }

      loadFromStorage() {
        const saved = localStorage.getItem("employees");
        if (saved) {
          const raw = JSON.parse(saved);
          this.employees = raw.map((emp) => {
            if (emp.employeeType === "Manager") {
              const m = new Manager(emp.name, emp.age, emp.pay, emp.hrs);
              m.salary = emp.salary; // restore salary
              return m;
            } else {
              const p = new PartTime(emp.name, emp.age, emp.pay, emp.hrs);
              p.salary = emp.salary;
              return p;
            }
          });
        }
      }
      // save to storage
      saveToStorage() {
        localStorage.setItem("employees", JSON.stringify(this.employees));
      }

      // display employees
      displayEmployees() {
        console.clear();
        console.log("Employees Tracker");
        console.log("ID\tName\t\tSalary\tHours\tPayRate\tType");
        this.employees.forEach((emp, index) => {
          console.log(
            `${index + 1}\t${emp.name.padEnd(15)}\t${emp.salary.toFixed(2)}\t${
              emp.hrs
            }\t${emp.pay}\t${emp.employeeType}`
          );
        });
      }

      // add employee
      addEmployee() {
        const input = prompt(
          "Enter: name, age, pay rate, hours (separated by commas)"
        );
        if (!input) return this.menu();

        const [name, ageStr, payStr, hrsStr] = input.split(",");
        const age = parseInt(ageStr);
        const pay = parseFloat(payStr);
        const hrs = parseFloat(hrsStr);

        if (!name || isNaN(age) || isNaN(pay) || isNaN(hrs)) {
          alert("Invalid input. Try again.");
          return this.menu();
        }

        // new employee
        // if greater than 40 hours then is manager
        let newEmp;
        if (hrs >= 40) {
          newEmp = new Manager(name, age, pay, hrs);
        } else {
          newEmp = new PartTime(name, age, pay, hrs);
        }

        // dush new employee to lis6
        this.employees.push(newEmp);
        this.saveToStorage();
        alert("New employee added.");
        this.displayEmployees();
        this.menu();
      }

      // option to remove an employee

      removeEmployee() {
        const input = prompt("Enter the employee ID to remove:");
        const id = parseInt(input);
        if (!isNaN(id) && id > 0 && id <= this.employees.length) {
          this.employees.splice(id - 1, 1);
          this.saveToStorage();
          alert("Employee removed.");
        } else {
          alert("Invalid ID.");
        }
        this.displayEmployees();
        this.menu();
      }

      // menu
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
    }

    // instantiate the application
    new Main();
  };

