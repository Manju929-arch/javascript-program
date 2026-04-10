let input = document.getElementsByTagName("input")[0];

let submit = document.getElementsByTagName("button")[0];
let immage = document.getElementsByClassName("qr")[0];

submit.addEventListener("click",  ()=> {
    console.log(input.value);
    immage.style.display = "block";
    immage.style.margin = "60px auto";
    // immage.style.width = "150px";
    immage.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}" alt="QR is loading....">`;

});