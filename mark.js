let java = Number(prompt("Enter your Java marks"))
let python = Number(prompt("Enter your Python marks"))
let c = Number(prompt("Enter your C marks"))
let cplus = Number(prompt("Enter your C++ marks"))
let javascript = Number(prompt("Enter your JavaScript marks"))

if (
    isNaN(java) || isNaN(python) || isNaN(c) || isNaN(cplus) || isNaN(javascript) ||
    java < 0 || python < 0 || c < 0 || cplus < 0 || javascript < 0 ||
    java > 100 || python > 100 || c > 100 || cplus > 100 || javascript > 100
) {
    alert("Please provide proper input")
}
else {

    if (java >= 90 && python >= 90 && c >= 90 && cplus >= 90 && javascript >= 90) {
        console.log("Distinction")
    }
    else if (java >= 30 && python >= 30 && c >= 30 && cplus >= 30 && javascript >= 30) {
        console.log("First Class")
    }
    else {
        console.log("Fail")
    }

}