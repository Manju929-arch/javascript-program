let amount =prompt("Enter amount")
if(amount.lenght<1 || isNaN(amount)){
    alert("please provide proper input")
}
if(amount >500){
    let notes = Math.floor(amount/500)
    console.log(notes, " === 500")
    amount -=(notes*500)
}
if(amount >=200){
    let notes = Math.floor(amount/200)
    console.log(notes, " === 200")
    amount -=(notes*200)
}
if(amount >=100){
    let notes = Math.floor(amount/100)
    console.log(notes, " === 100")
    amount -=(notes*100)
}
if(amount >=50){
    let notes = Math.floor(amount/50)
    console.log(notes, " === 50")
    amount -=(notes*50)
}
if(amount >=20){
    let notes = Math.floor(amount/20)
    console.log(notes, " === 50")
    amount -=(notes*20)
}
if(amount >=10){
    let notes = Math.floor(amount/10)
    console.log(notes, " === 10")
    amount -=(notes*10)
}
if(amount >=5){
    let notes = Math.floor(amount/5)
    console.log(notes, " === 5")
    amount -=(notes*5)
}
if(amount >=2){
    let notes = Math.floor(amount/2)
    console.log(notes, " === 2")
    amount -=(notes*2)
}
if(amount >=1){
    let notes = Math.floor(amount/1)
    console.log(notes, " === 1")
    amount -=(notes*1)
}

console.log(amount)