
let navbar = document.getElementsByClassName("navbar")[0];
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";  
navbar.style.backgroundColor = "black";
navbar.style.color = "white";
navbar.style.padding = "10px";
navbar.style.position = "sticky"
navbar.style.top = '0';




let navUl = document.getElementsByClassName("nav-links")[0];
navUl.style.display = "flex";         
navUl.style.listStyle = "none";       
navUl.style.margin = "0";
navUl.style.padding = "0";

let links = navUl.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "white";
    links[i].style.margin = "10px";
    links[i].style.textDecoration = "none";
}


let hero = document.getElementsByClassName("hero")[0];
hero.style.textAlign = "center";
hero.style.backgroundColor = "#f0f8ff";
hero.style.padding = "40px";

let title = document.getElementsByClassName("title")[0];
title.style.color = "red";

let subtitle = document.getElementsByClassName("subtitle")[0];
subtitle.style.color = "blue";

let tagline = document.getElementsByClassName("tagline")[0];
tagline.style.color = "green";


let about = document.getElementsByClassName("about")[0];
about.style.padding = "20px";

let desc = document.getElementsByClassName("description")[0];
desc.style.color = "gray";

let skills = document.getElementsByClassName("skills")[0];
skills.style.padding = "20px";

let skillCards = document.getElementsByClassName("skill-card");
for (let i = 0; i < skillCards.length; i++) {
    skillCards[i].style.display = "inline-block";
    skillCards[i].style.margin = "10px";
    skillCards[i].style.padding = "10px";
    skillCards[i].style.backgroundColor = "orange";
    skillCards[i].style.color = "white";
}


let inputs = document.getElementsByClassName("input-field");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.display = "block";
    inputs[i].style.margin = "10px";
    inputs[i].style.padding = "8px";
}

let btn = document.getElementsByClassName("btn")[0];
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.padding = "10px";
btn.style.border = "none";


let footer = document.getElementsByClassName("footer")[0];
footer.style.backgroundColor = "black";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "10px";