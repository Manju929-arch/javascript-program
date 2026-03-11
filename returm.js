// function add(a=10 , b=20){

//     let c = a+b
//     console.log(c)
// }
// add();
// add(100,200);
// add(1000,2000);
// add(10000,20000);
// add(100000,200000);
// add(1000000,2000000);

//NESTED FUNCTION EXAMPLE//
// function one(){

//     let a= "a"
//     console.log(a)
//     function two(){
//         let b ="b"
//         console.log(b)
//         function three(){
//             let c = "c"
//             console.log(c)
//         }
//         three();
//     }
//     two();
// }
// one();
// THIS IS RETURN FUNCTION WHICH CAN BE USED FOR THE TROWING THE LOGIC OUT SIDE THE FUNCTION WHICH CAN BE STORED IN A VARIABLE//
// let first_name = "Ravi"
// let last_name = "Shastry"
// function greet(){
//     let c =first_name.concat(last_name)
//     return(c)
// }
// let x = greet()
// console.log(x)
// console.log(`My name is ${x}`)
// 
//// AFTER RETURN FUNCTION THE CODE GET TERMINATED AND REST OF THE CODE WILL NOT ACCESSIBLE AND RETURN FUNCTION ONLY 
//// CAN RETURN ONLY ONE ELEMENT MUTIPLE ELEMENT CAN BE RETURN IN FUNCTION AND THIS IS THE IMPORTANT POOINT WHICH CAN BE USED FRO REACT.JS
// function full_name(){
//     let x = "ravi"
//     let y = "Shastry"
//     return(x,y)
// }
// //  ADDITION
// function first(){
//     let a = 10;
//     return(a)
// }
// let x = first()

// function second(){
//     let b=20;
//     return(b)
// }
// let y = second();
// function add(){
//     return(x+y)
// }
// let res =add()
// console.log(res)
// //SUBTRACTION
// function first1(){
//     let a1 = 10;
//     return(a1)
// }
// let x1 = first1()

// function second1(){
//     let b1=20;
//     return(b1)
// }
// let y1 = second1();
// function sub(){
//     return(x1-y1)
// }
// let res1 =sub()
// console.log(res1)
// //MULTIPLICATION
// function first3(){
//     let a2 = 10;
//     return(a2)
// }
// let X2 = first3()

// function second3(){
//     let b2=40;
//     return(b2)
// }
// let y2 = second3();
// function mul(){
//     return(X2*y2)
// }
// let res2 =mul()
// console.log(res2)
// //DIVISION
// function first4(){
//     let a3 = 10000;
//     return(a3)
// }
// let X3= first4()

// function second4(){
//     let b3=100;
//     return(b3)
// }
// let y3 = second4();
// function div(){
//     return(X3/y3)
// }
// let res3 =div()
// console.log(res3)
// //EXOPONENTIAL
// function first5(){
//     let a4 = 4;
//     return(a4)
// }
// let x4= first5()

// function second5(){
//     let b4=3;
//     return(b4)
// }
// let y4 = second5();
// function exp(){
//     return(x4**y4)
// }
// let res4 =exp()
// console.log(res4)
// //MODULUS
// function first6(){
//     let a5 = 4;
//     return(a5)
// }
// let x5= first6()

// function second6(){
//     let b5=3;
//     return(b5)
// }
// let y5 = second6();
// function mod(){
//     return(x5%y5)
// }
// let res5 =mod()
// console.log(res5)
// //ASSIGNMENT OPERATOR +=
// function first7(){
//     let a6 = 4;
//     return(a6)
// }
// let x6= first7()

// function second7(){
//     let b6=3;
//     return(b6)
// }
// let y6 = second7();
// function ash(){
//     return(x5+=y5)
//     return(x5+=y5)
// }
// let res6 = ash()
// console.log(res6)
// console.log(res6)

// //-=
// function sub1(){
//     retrun(x5-=y5)
// }
// let res7 = 
// console.log(res)

//NORMAL FUNCTION AND ARROW FUNCTION VERY IMPORTANT
//SYNTAX FOR ARROW FUNCTIION
//NORMAL FUNCTION HAS KEY WORD this and ARROW FUNCTION DOES NOT HAVE THE KEYWORD  this THIS IS MOST IMPORTANT THING
let a = () => {
    let x = "Hello"
    return(x)
}
let task =a()
console.log(task)










