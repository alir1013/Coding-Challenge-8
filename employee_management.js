//Task 1: Creating an Employee Class
class Employee {
    constructor(name,salary,position,department){ //Constructor initilizes the object when a new instance is created
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails(){        //returns a string with the employee’s name, position, and salary
      console.log (`${this.name} position is: ${this.position} and their salary is $${this.salary}`);
    }
}
    //Testing the function
    const employeeTest= new Employee("Jane Doe",80000,"Security Analyst");
    employeeTest.getDetails();
   

//Task 2: Creating a Department Class
class Department{
    constructor(name){
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){   //Adds an employee to the employee array
        this.employees.push(employee);
    }
    getDepartmentSalary(){
        return this.employees.reduce((total,employees) => total + this.employees.salary, 0); 
    }
}

//Task 3: Creating a Manager Class that Inherits from Employee

class Manager extends Employee {    //Manager inherits from employee with the extend method
    constructor(name,salary,position,department,bonus){
        super(name,salary,position,department);  //Calls the parent constructor 
        this.bonus = bonus;
    }
    getDetails(){
        console.log (`${this.name} position is: ${this.position},their salary is $${this.salary}, and they have a bonus of $${this.bonus}`);
    }
}

//Task 4: Handle Bonuses for Managers
function calculateTotalSalaryWithBonus(department){
    return department.employees.reduce((total, employee) => {
         if (employee instanceof Manager) {   //Adding bonus
             return total + employee.salary + employee.bonus; //Calculating total salary
         }
         return total + employee.salary;
     }, 0);
 }

 //Task 5: Creating and Managing Departments and Employees

// Create departments

const business = new Department("Business");
const cybersecurity = new Department("Cybersecurity");

// Create employees

const jane = new Employee("Jane", 80000, "Financial Advisor", "Business");
const billy = new Employee("Billy", 75000, "Security Analyst", "Cybersecurity");
const alicia = new Manager("Alicia", 120000, "HR Manager", "Business", 20000);
const diana = new Manager("Diana", 130000, "Cybersecurity Manager", "Cybersecurity", 25000);

// Add employees to departments

business.addEmployee(jane);
cybersecurity.addEmployee(billy);
business.addEmployee(alicia);
cybersecurity.addEmployee(diana);

// Calculate total salary for each department

console.log(`Total salary for Business Department: $${business.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Business Department: $${calculateTotalSalaryWithBonus(business)}`);
console.log(`Total salary for Cybersecurity Department: $${cybersecurity.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Cybersecurity Department: $${calculateTotalSalaryWithBonus(cybersecurity)}`);

