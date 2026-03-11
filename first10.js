let emp = {
    name : "Manjunath ",
    contact: 1234567890,
    address : "Bangalore",
    Education : "BE",
    Company: "DCL",
    hobbies: ["reading","running","swiming","dancing","Coding"],
    laptop : {
       company :"Apple",
       model : 1300000,
       color: "silver",
       storage: "11b",
       manufacture_year: "2020",


}
}
// Destructuring in Es6 version 
let {name, contact, address, Education,Company,hobbies,laptop} =emp
let{company, model,color,storage,manufacture_year}=laptop
console.log(name)
console.log(contact)
console.log(Education)
console.log(Company)
console.log(hobbies[hobbies.length-1])
console.log(company)
console.log(model)
console.log(color)
console.log(storage)
console.log(manufacture_year)