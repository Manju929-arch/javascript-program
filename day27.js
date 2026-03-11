// let a = Number(prompt("Enter the number"))
// if( a%3 === 0 ){
//        console.log(("the number is  divisible by 3")) 

// }
// else{

//    console.log(("the number is not divisible by 3")) 
// }

// let a = Number(prompt("Enter the number"))
// if( a%5 === 0 ){
//        console.log(("the number is  divisible by 5")) 

// }
// else{

//    console.log(("the number is not divisible by 5")) 
// }

// let a = Number(prompt("Enter the number"))
// if( a%5 === 0 ){
//        console.log(("the number is  divisible by 3")) 

// }
// else if(a%3===0){

//    console.log(("the number is not divisible by 3")) 
// }
// else{
//     console.log("The number is not divisble by both 3 and 5")
// }

// a = prompt("Enter the time").toLocaleLowerCase()
// if(a === "am"){
//     console.log("it is am")
// }
// else{
//     console.log("is is pm")
// }

// let a = Date()
// console.log(a)
// let today = new Date();
// let date = today.getDate();
// let month = today.getMonth();
// let hour = today.getHours();
// console.log(date)
// console.log(month)
// console.log(hour)

// let java = prompt("Enter java marks")
// let c  = prompt("enter c marks")
// if (isNaN(java)|| isNaN(c)){
//     alert("please provide no:")
// }
// else if(java>100||java<0||c>100||c<0){
//     alert("please provide proper input")

// }
// else if(java>35 && c>35){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();

let period = hour >= 12 ? "PM" : "AM";

hour = hour % 12;
hour = hour ? hour : 12;

console.log("Current time: " + hour + ":" + minute + " " + period);

let today = new Date();
let month = today.getMonth();

let months = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

console.log("Current month is " + months[month]);


let todays= new Date();
let day = todays.getDay();

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Today is " + days[day]);

let num = parseInt(prompt("Enter a number"));

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Number is divisible by both 3 and 5");
} else {
    console.log("Number is not divisible by both 3 and 5");
}



