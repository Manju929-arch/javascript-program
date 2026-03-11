// Nested condition 
let age = Number(prompt("enter age:"))
if(age>120|| age<= 0){
    alert("Please enter proper age:")
}
else if(age>=18){
    console.log("eligible to vote")
    let gender = prompt("enter gender").toLocaleLowerCase()
    if(gender ==="m"|| gender === "male"){
        console.log("stand in male line")
    }
    else if(gender === "f"||gender === "female"){
        console.log("stand in female line")
    }
    else if(gender === "o" || gender === "other"){
        console.log("stand in other line")
    }
    
}
