// // WAP to calculate sum of even number range from 1 to 100
// // WAP to calculate sum of even numbers from 1 to 100

// // let sum = 0;

// // for (let i = 1; i <= 100; i++) {
// //     if (i % 2 == 0) {
// //         sum = sum + i;
// //     }
// // }

// // console.log("Sum of even numbers:", sum);

// // WAp to  calculate sum of odd number range from 1 to 100


// let sum =0;
// for (let i=1;i<=100;i++){
//     if(i%2!=0){
//         sum = sum+i

//     }
// }
// console.log(sum)

// WAP to check given number is prime or not 

// WAP to check whether a number is prime or not

// let num = Number(prompt("Enter number"));
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// }

// for (let i = 2; i < num/2; i++) {
//     if (num % i == 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log("Prime number");
// } else {
//     console.log("Not a prime number");
// }
// Wap to check whether the given string is palindrome or not
// WAP to check whether string is palindrome

// let str = prompt("Enter string");
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }

// if (str === rev) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }



//  to check to whehter number i palindrone or not


// WAP to check whether number is palindrome

// let num = Number(prompt("Enter number"));
// let original = num;
// let rev = 0;

// while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }

// if (original === rev) {
//     console.log("Palindrome number");
// } else {
//     console.log("Not palindrome number");
// }
// WAP to calculate the factorial of given number 



// let num = Number(prompt("Enter a number"));
// let fact = 1;
// if(isNaN(num)){
//     alert("please provide proper input")


// }
// else{
//     for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }

// console.log("Factorial is:", fact);
// }

let a =121
let prime = true
for(let i=2;i<=Math.floor(Math.sqrt(a) ); i++){
    if(a%i ==0){
        console.log(i)
        prime =false
        break
    }
    else{
    console.log("prime no")
}
}
