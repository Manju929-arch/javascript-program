// let arr =["Apple","Mango","ravi","banana","Graphs","Shastry","Pineapple"]
// let rev = []
// for(let i = arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }


// let arr =["Apple","Mango","ravi","banana","Graphs","Shastry","Pineapple"]


let arr= ["ravi","shastruy","mrunal","thakur","a","b","c","d",1,2,3,4,"$" ,"#" , "%" ,"@" ]
// let word =[]
let char  =[]
// let number =[]
let special  =[]

// for(let i =0;i<arr.length;i++){
//     if(arr[i].length>1 ){
//        word.push(arr[i])
//     }

//     else if(typeof(arr[i]=="number")){
//         number.push(arr[i])
//         console.log(arr[i])
//     }
//     if(typeof(arr[i]=="string" && arr[i].length==1)){
//         if(arr[i].match(/[a-zA-Z]/)){
//             // console.log(arr[i])
//         }
//     }
// }
// console.log(word)
// console.log(number)


// for(let i= 0 ;i<arr.length;i++){

//     if(arr[i].length>1){
//         word.push(arr[i])
//     }
//     else if(typeof(arr[i])=="number"){
//         number.push(arr[i])
//     }
//     else if(typeof(arr[i])=="string" && arr[i].length==1){
        
//         if(arr[i].match(/[a-zA-Z]/)){


//         console.log(aar[i])
//     }
// }

// }



let word = [];
let number = [];

for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "string" && arr[i].length > 1) {
        word.push(arr[i])
    } 
    else if (typeof arr[i] === "number") {
       
       number.push(arr[i])
    } 
    else if (typeof arr[i] === "string" && arr[i].length === 1) {
        if (/[a-zA-Z]/.test(arr[i])) {
           char.push(arr[i]);
        }

    else{

        special.push(arr[i])
    }
    }

}

console.log(word)
console.log(special)
console.log(number)
console.log(char)
