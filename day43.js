// let apple = document.getElementsByTagName("button")[0]
// apple.addEventListener("click",()=>{
//     console.log("Clicked on the Apple button")
// })

// let Mango = document.getElementsByTagName("button")[1]
// Mango.addEventListener("click",()=>{
//     console.log("clicked on the mango button")
// })
// let banana = document.getElementsByTagName("button")[2]
// banana.addEventListener("click",()=>{
//     console.log("clicked on the banana button")
// })
// let submit = document.getElementsByTagName("button")[0]
// submit.addEventListener("click",()+>{
//     alert("you clicked on the submit")
// })

let first= document.getElementsByTagName("input")[0]
let last = document.getElementsByTagName("input")[1]
let email = document.getElementsByTagName("input")[2]
let contact = document.getElementsByTagName("input")[3]
let submit = document.getElementsByTagName("button")[0]
let fn = document.getElementsByClassName("fn")[0]
let e = document.getElementsByClassName("e")[0]
let c = document.getElementsByClassName("c")[0]
let card = document.getElementsByClassName("card")[0]
 // if(first.value.length==0 || last.value.length==0 || email.value.length==0){
    //     alert("please Enter all the input")
    // }
    // else{
    // alert(`name: ${first.value.concat(last.value)}\n email:  ${email.value}`)
    // }

submit.addEventListener("click",()=>{
    let name = first.value+last.value
    let email1 = email.value

    card.innerHTML += `
        <div class="card">
        <h3>Name: <span class="fn">${name}</span></h3>
        <h3>Email: <span class="e">${email1}</span></h3>
        <h3>contact: <span class="c"></span></h3>
    </div> `  
})