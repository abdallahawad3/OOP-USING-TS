//* we will talk about class and constructor methods.
class User {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greetUser(salutation: string) {
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
console.log(
  "\n\n\n🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔 Access Modifier 🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔\n\n\n\n"
);
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
  empName: string;
  private salary: number;
  baseLocation: string;
  isEligible: boolean;
  private hikePercent: number;

  constructor(name: string, sal: number, loc: string, isEligible: boolean, hike: number) {
    this.empName = name;
    this.salary = sal;
    this.baseLocation = loc;
    this.isEligible = isEligible;
    this.hikePercent = hike;
  }

  getSalary(): number {
    return this.isEligible ? this.getNewSalary() : this.salary;
  }

  private getNewSalary(): number {
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
  constructor(
    public name: string,
    public age: number,
    private salary: number
  ) {}

  getSalary(): number {
    return this.salary;
  }
}

const em1 = new Emp("Abdullah", 21, 20000);
console.log(em1);
console.log(em1.getSalary());

// Readonly Property
console.log("\n\n\n🤔🤔🤔🤔🤔🤔 Readonly Property 🤔🤔🤔🤔🤔🤔🤔\n\n\n\n");
class Emp2 {
  readonly empId: number;
  constructor(
    public name: string,
    public age: number,
    private salary: number,
    id: number
  ) {
    this.empId = id;
  }

  getSalary(): number {
    return this.salary;
  }
}

const em2 = new Emp2("Ali", 21, 58568, 101);
console.log(em2);
// em2.empId = 58; // This an error => Cannot assign to 'empId' because it is a read-only property
console.log(`Employee id is an read only property 👉`, em2.empId);

/// Inheritance in ts //
console.log("\n\n\n\n💥💥💥💥💥💥 Inheritance In Ts 💥💥💥💥💥💥\n\n\n ");
class Person {
  constructor(
    public name: string,
    protected birthYear: number,
    public gender: string
  ) {}

  calcAge(): number {
    return new Date().getFullYear() - this.birthYear;
  }
}

const p1 = new Person("Abdullah", 2003, "male");

class Employee2 extends Person {
  private salary: number;
  private bonus: number;
  constructor(name: string, birthYear: number, gender: string, sal: number, b: number) {
    super(name, birthYear, gender);
    this.salary = sal;
    this.bonus = b;
  }

  calcSalary(): number {
    return this.salary + this.bonus;
  }
  calcAge(): number {
    return 2024 - this.birthYear;
  }
}

const emp1 = new Employee2("Abdullah", 2003, "male", 25000, 125);

console.log(p1);
console.log(emp1);

/*
    * Understanding Inheritance in TypeScript 🌀
    Inheritance allows a new class, called a subclass or derived class, to inherit the properties and methods of an existing class, 
    called the superclass or base class. 
    This helps in creating a hierarchical relationship between classes.

    Breakdown of My Code.⛓️‍💥
    
    01 👉 Superclass (Person):
    Properties:

    1️⃣ name: string: Public property for the person's name.
    2️⃣ birthYear: number: Public property for the person's birth year.
    3️⃣ gender: string: Public property for the person's gender.
    
    Constructor: 🤔🤔 
    Initializes name, birthYear, and gender.
    Method (calcAge):
    calcAge(): A method that calculates the age of the person by subtracting their birth year from the current year.
    
    
    02 👉 Subclass (Employee2):
    Properties:
    1️⃣ salary: number: Private property for the employee's salary.
    2️⃣ bonus: number: Private property for the employee's bonus.
    
    Constructor:🤔🤔 

    super(): Calls the constructor of the superclass Person to initialize name, birthYear, and gender.
    Initializes salary and bonus.

    Method (calcSalary):
    calcSalary(): A method that calculates the total salary of the employee by adding the salary and bonus.
 */

//*********** GETERR AND SETTER METHODS */
console.log("\n\n\n\n🌀🌀🌀🌀🌀🌀🌀 GETERR AND SETTER METHODS 🌀🌀🌀🌀🌀🌀🌀\n\n\n\n\n");

class Person2 {
  public name: string;
  private _age: number | null = null;

  constructor(n: string) {
    this.name = n;
  }

  get GetAge(): number {
    if (this._age != null) {
      console.log("The Age from geterr method");
      return this._age;
    } else throw new Error("there no age");
  }

  set SetAge(age: number) {
    this._age = age;
  }
}

const person1 = new Person2("john");

console.log(person1);
// console.log(person1.GetAge);

person1.SetAge = 21;
console.log(person1);
console.log(person1.GetAge);
