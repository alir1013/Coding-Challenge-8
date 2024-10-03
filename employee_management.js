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
    //Testing the function
    const employeeTest= new Employee("Jane Doe",50000,"Security Analyst","Cybersecurity");
    employeeTest.getDetails();
    }
}

