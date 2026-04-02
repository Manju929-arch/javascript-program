let apple = document.getElementsByTagName("li")[0]
console.log(apple)
apple.id = "id"
console.log(apple)
apple.className = "class"
console.log(apple)
let a1 = document.getElementsByClassName("class")[0]
console.log(a1)
a1.style.color= 'red'

let mango = document.getElementsByTagName("li")[1]
console.log(mango)
mango.id = "mango"
console.log(mango)
let b1 = document.getElementsByTagName("li")[1]
b1.style.color = 'yellow'