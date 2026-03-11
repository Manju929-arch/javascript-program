console.log("Welcome to Ravi Bank")

let balance = 100
let again = true

while (again) {

let input = prompt("Enter the choice which you want to \n 1. Deposit \n 2. Withdrawal \n 3. Balance")



let choice = input.toLowerCase()

if (choice === "1" || choice === "deposit" || choice === "d") {

    let d = Number(prompt("Enter the amount"))

    if (isNaN(d) || d < 0) {
        alert("Please provide proper input")
    }
    else {
        console.log(`You have deposited ${d} amount`)
        balance += d
    }

}

else if (choice === "2" || choice === "withdrawal" || choice === "w") {

    let w = Number(prompt("Enter the withdrawal amount"))

    if (isNaN(w) || w < 0) {
        alert("Please provide proper input")
    }
    else {

        if (w > balance) {
            alert("Insufficient balance")
        }
        else {
            console.log(`Your withdrawal amount ${w}`)
            balance -= w
            console.log("Your balance =", balance)
        }

    }

}

else if (choice === "3" || choice === "balance" || choice === "b") {

    console.log("The balance is", balance)

}

else {
    alert("Enter valid input")
}

again = confirm("Do you want to continue")

}

console.log("Thank you for banking")