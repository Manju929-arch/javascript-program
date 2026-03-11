// function greet(){
//     console.log(("Hello all good morning this is class"))
//     console.log("Hello this is Manjunath G")
//     console.log("Happy Holi to all ")
// }
// greet()
// function add( a= 10, b=20){
//     let c=a+b;
//     console.log(c)
// }
// add();
// function sub(a= prompt("enter first no :"),b=prompt("Enter second no:")){
//     let c= a-b
//     console.log(c, "this is substraction")
// }
// sub();
// function add() {
//   let a = 100;
//   let b = 200;
//   let c = a + b;
//   console.log(c, "this is addition");
// }
// add();
// function sub() {
//   let a = 200;
//   let b = 100;
//   let c = a - b;
//   console.log(c, "This is subtraction");
// }
// sub();
// function concate(a= "Manju", b= "nath"){
//     let c= a.concat(b)
//     console.log(c, "this is concate")

// }
// concate()
// function trims(a ="  Manjunath   "){
//     let c = a.trim()
//     console.log(c,"this is trim")
// }
// trims();
// function substrings(a = "Manjunath "){
//     let c = a.substring(5)
//     console.log(c,"This is substring ")
// }
// substrings();
// function slices(a = "Manjunath "){
//     let c = a.slice(5)
//     console.log(c,"this is slices")
// }
// slices();
// function caps(a = "manjunath"){
//     let c= a.toUpperCase();
//     console.log(c, "this is toUppercase")
// }
// caps();
// function low(a = "MANJUNATHG"){
//     let c= a.toLowerCase();
//     console.log(c, "this is toLower case")
// }
// low();
// console.log("------------------Arthematic operatioon------------------------------")
// function add(){
//     let a = 10;
//     let b= 20;
//     let c= a+b;
//     console.log(c, "This is addition")
// }
// add();
// function sub(){
//     let a = 10;
//     let b= 20;
//     let c= a-b;
//     console.log(c, "This is substraction")
// }
// sub();
// function mul(){
//     let a = 10;
//     let b= 20;
//     let c= a*b;
//     console.log(c, "This is Multiplication")
// }
// mul();
// function div(){
//     let a = 10;
//     let b= 20;
//     let c= a/b;
//     console.log(c, "This is Division")
// }
// div();
// function florr(){
//     let a = 10;
//     let b= 20;
//     let c= a//b;
//     console.log(c, "flor division")
// }
// florr();
// function exp(){
//     let a = 10;
//     let b= 20;
//     let c= a**b;
//     console.log(c, "This is exponential")
// }
// exp();
// console.log("------------------Assignment operation and comparison operator-----------------------------")
// function equal(){
//     let a =100;
//     let b = 100;
//     let c = a==b;
//     console.log(c,"This is ==")
// }
// equal()
// function diveq(){
//     let a =100;
//     let b = 100;
//     let c = a/=b;
//     console.log(c,"This is /=")
// } diveq()
// function addv(){
//     let a =100;
//     let b = 100;
//     let c = a+=b;
//     console.log(c,"This is +=")
// }
// addv()
// function subv(){
//     let a =100;
//     let b = 100;
//     let c = a-=b;
//     console.log(c,"This is -=")
// }
// subv()
// function greatv(){
//     let a =100;
//     let b = 100;
//     let c = a>=b;
//     console.log(c,"This is >=")
// }
// greatv()
// function lessv(){
//     let a =100;
//     let b = 100;
//     let c = a<=b;
//     console.log(c,"This is <=")
// }
// lessv()
// function modv(){
//     let a =100;
//     let b = 100;
//     let c = a%=b;
//     console.log(c,"This is %=")
// }
// modv()
// function mulv(){
//     let a =100;
//     let b = 100;
//     let c = a*=b;
//     console.log(c,"This is *=")
// }
// mulv()
// function notv(){
//     let a =100;
//     let b = 100;
//     let c = a!=b;
//     console.log(c,"This is !=")
// }
// notv()
// let arr = [1,2,3,4,5]
// function addElement(){
//     arr.push(8)
//     console.log(arr, "push")

// }
// addElement();

// let arr1 = [20,30,40,50,80]
// function removeelement(){
//     arr1.shift()
//     console.log(arr1,"shift")
// }
// removeelement();
// function flats(){
//    let a= arr.flat(arr1)
//     console.log(a, "flat")
// }
// flats();
// function includess(){
//     let b = arr.includes(5);
//     console.log(b, "includes")
// }
// includess();
// function pops(){
//     let c = arr.pop()
//     console.log(c,"Pop")
// }
// pops();
function concate(a,b){
    let c = a.concat(b);
    console.log(c);
}
concate("Manju","nath");
function upperCase(str){
    let result = str.toUpperCase();
    console.log(result);
}
upperCase("manjunath");

function lowerCase(str){
    let result = str.toLowerCase();
    console.log(result);
}
lowerCase("MANJUNATH");

function sliceString(str){
    let result = str.slice(0,5);
    console.log(result);
}
sliceString("Manjunath");

function isexist(str){
    let result = str.includes('Manj');
    console.log(result);
}
isexist("Manjunath")
