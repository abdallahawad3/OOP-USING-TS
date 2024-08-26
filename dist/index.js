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
