// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);  // Runs at least once


// let arr = [1, 2, 3];
// arr.forEach((item, index) => {
//     console.log(`${index}: ${item}`);
// });


// Object literal
let person = {
    name: "Manju",
    age: 25,
    email: "manju@email.com"
};

// Access properties
person.name;           // "Manju"
person.age;         // 25
console.log(person["age"])
// Add new property
person.city = "Bangalore";

// Delete property
delete person.email;