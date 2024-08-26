"use strict";
//* we will talk about class and constructor methods.
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greetUser(salutation) {
        //why we use salutation var without "this keyword" and we use "this keyword" with name property.
        /*
         * Explanation:
    
          01 - Local Variables (Function Parameters):📝
          The salutation parameter is a local variable specific to the greetUser function. It is passed to the function when it's called.
          Since salutation is local to the function, you do not need to use "this" to refer to it.
          It is directly accessible by its name 🤔 within the function scope.
    
          02 - Object Properties:🔬
    
          The name property, on the other hand, is a property of the object that the method is associated with.
          To access the name property of the object, you must use "this.name 🤔".
          The this keyword refers to the current instance of the object on which the method is being called.
          Using this.name 💥 ensures that you are accessing the name property of the specific object instance that invoked the greetUser method.
         */
        console.log(`Welcome!, ${salutation}. ${this.name}`);
    }
}
let u1 = new User("Abdullah", 21, "male");
let u2 = new User("abdo", 44, "male");
let u3 = new User("sarah", 21, "female");
console.log(u1);
u1.greetUser("Mr");
console.log("\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉\n\n");
console.log(u2);
u2.greetUser("Mr");
console.log("\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉\n\n");
console.log(u3);
u3.greetUser("Mrs");
//* Access Modifier 🤔**/
console.log("\n\n\n🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔 Access Modifier 🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔\n\n\n\n");
/**
 *
 * Understanding Access Modifiers:
    In TypeScript (and many object-oriented programming languages),
    access modifiers are keywords that define the accessibility of class properties and methods out of the class.
    The three common access modifiers in TypeScript are:

    1️⃣: public: The default access modifier. Properties and methods are accessible from anywhere.
    2️⃣: private: Properties and methods are only accessible within the class they are defined.
    3️⃣: protected: Properties and methods are accessible within the class and its subclasses.
 */
class Employee {
    constructor(name, sal, loc, isEligible, hike) {
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible = isEligible;
        this.hikePercent = hike;
    }
    getSalary() {
        return this.isEligible ? this.getNewSalary() : this.salary;
    }
    getNewSalary() {
        return this.salary + (this.hikePercent * this.salary) / 100;
    }
}
const employee1 = new Employee("Abdullah", 10000, "egypt", false, 5);
const employee2 = new Employee("Abdullah", 10000, "landon", true, 20);
// employee1.salary = 32005; // Error => Property 'salary' is private and only accessible within class 'Employee'
console.log(employee1);
const sal1 = employee1.getSalary();
const sal2 = employee2.getSalary();
console.log("Salary of employee 1 is : ", sal1);
console.log("Salary of employee 2 is : ", sal2);
/// Shorthand Property Initializer //
console.log("\n\n\n🤔🤔🤔🤔🤔🤔 Shorthand Property Initializer 🤔🤔🤔🤔🤔🤔🤔\n\n\n\n");
class Emp {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
const em1 = new Emp("Abdullah", 21, 20000);
console.log(em1);
console.log(em1.getSalary());
