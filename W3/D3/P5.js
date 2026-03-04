// Basics of objects
const person = {
    name:"Shalini",
    age:23,
    isStudent:false
};
// console.log("Person", person);
// console.log("Name:",person.name);
// console.log("age:",person["age"]);

//Add a new property
person.city="Mysore";
console.log("Person", person);
//Modify
person.age=31;
//delete
delete person.isStudent;
console.log("Person", person);

// object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
console.log(car);