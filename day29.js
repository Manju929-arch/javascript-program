// write a program ot calculate the total amount of total eletric unit consumes conditoin 
// 0 -100 - 4 rupees per unit
// 100 -200 -6 rupees per unit
// 201 -400 - 8 rupees per unit
// 400<  - 10 rupees per 10 per unit
// example if 700 it 
let units = prompt("enter units:")
amount =0
if(units>400){
    amount+=(units - 400)*10
    units = 400
}
if(units>200){
    amount+=(units - 200)*8
    units = 200
}
if(units>100){
    amount+=(units - 100)*6
    units = 100
}
if(units>0){
    amount+=(units - 0)*4

}
else{
    alert("please enter proper   input")
}
console.log(amount)