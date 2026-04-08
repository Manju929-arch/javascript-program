let firsname = document.getElementById("fn")
let lastname = document.getElementById("ln")
let contact = document.getElementById("con")
let email = document.getElementById("email")
let submit = document.getElementsByTagName("button")[0]


let cardname = document.getElementsByClassName("name")[0]
let cardcontact = document.getElementsByClassName("contact")[0]
let cardemail = document.getElementsByClassName("emai")[0]
submit.addEventListener("click",()=>{
    if(confirm("do you want ot submit")){
    if(firsname.value)

    cardname.innerText = firsname.value+lastname.value
    cardcontact.innerText = contact.value
    cardemail.innerText = email.value
    }

})





