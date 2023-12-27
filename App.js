// Assignment 2: Object Operations
// Objective: Practice adding, removing, and updating values in objects.

// 1. Create an empty object called "person".

// 2. Add the following properties to the "person" object:
//    - name: "John"
//    - age: 30
//    - city: "New York"

// 3. Remove the "age" property from the "person" object.

// 4. Add a new property called "job" with the value "Engineer" to the "person" object.

// 5. Update the "city" property of the "person" object to "San Francisco".

// 6. Print the final "person" object after performing the above operations.

let person = {};
person.name = { name: "John", age: 30, city: "New York" };
delete person.name.age;
person.job = "Engineer";
person.name.city = "San Francisco";
console.log(person);
