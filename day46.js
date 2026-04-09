// let button = document.getElementsByTagName("button")[0]
// let h1 = document.getElementsByName("h1")[0]
// button.addEventListener("click",()=>{
//     card.innerHTML += `
//      <h1> Password <span>${h1.value} </span></h1>
     
//     `

        
      
// })
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqurstuvwxyz"
let num = "1234567890"
let spl_char = "!@#$%^&*()<>?"
let all = uppercase+lowercase+spl_char+num
let button = document.getElementsByTagName("button")[0]
let input = document.getElementsByTagName("input")[0]
console.log(button)
const generate = ()=>{
    let password = " " 
     password += uppercase[Math.floor(Math.random()*uppercase.length)]
     password += lowercase[Math.floor(Math.random()*lowercase.length)]
     password += num[Math.floor(Math.random()*num.length)]
     password+= spl_char[Math.floor(Math.random()*spl_char.length)]
     for(let i = password.length ;i<=14;i++){
        password += all[Math.floor(Math.random()*all.length)]
    
     }
     input.value = (password)
}
    let copy =()=>{
        let con = confirm("do you wnat ot copy")
        if(con === true){
            input.select()
            document.execCommand("copy")
            alert("pass copied")
        }
    }

// let uppercase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"

// let lowercase = "abcdefghijklmnopqurstuvwxyz"
// let num = "`1234567890"
// let spl_char = "!@#$%^&*()<>?"
// let input = document.getElementsByTagName("input")[0]
// let button = document.getElementsByTagName("button")[0]
// let all = lowercase+num+spl_char+uppercase
// const generate=()=>{
//     password =""
//     password +=lowercase[Math.floor(Math.random()*lowercase.length)]
//     password +=uppercase[Math.floor(Math.random()*uppercase.length)]
//     password +=num[Math.floor(Math.random()*num.length)]
//     password +=spl_char[Math.floor(Math.random()*spl_char.length)]
//     // if (password.length!= 14){
//     //  alert("password is invalid")
//     // }
//     // else{
//         for(let i = 0 ;i<=14;i++){

//             password+= all[Math.floor(Math.random()*all.length)]
//             console.log(password)

//         }
//     }

    
    
// // }

