let amount = Number(prompt("Enter total purchase amount:"));

let discount = 0;

if (amount >= 10000) {
    discount = 10;
} 
else if (amount >= 9000) {
    discount = 9;
} 
else if (amount >= 8000) {
    discount = 8;
} 
else if (amount >= 7000) {
    discount = 7;
} 
else if (amount >= 6000) {
    discount = 6;
} 
else if (amount >= 5000) {
    discount = 5;
} 
else {
    discount = 0;
}

let discountAmount = (amount * discount) / 100;
let finalAmount = amount - discountAmount;

console.log("Purchase Amount:", amount);
console.log("Discount Percentage:", discount + "%");
console.log("Discount Amount:", discountAmount);
console.log("Final Amount to Pay:", finalAmount);