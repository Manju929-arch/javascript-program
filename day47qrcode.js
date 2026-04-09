// let  names= [ "manju","deekshit","jeeshan"]
// let name = document.getElementsByTagName("span")[0]
// let time = document.getElementsByTagName("span")[1]

let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

// setInterval(() => {
//   let random = names[Math.floor(Math.random() * names.length)];
//   name.innerText = random;
// }, 2000);

setInterval(() => {
  let date = new Date();
   let hrs = date.getHours()
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (hrs >= 12) {
    hrs = hrs-12
    h.innerText = `${hrs}PM`;
    m.innerText = min;
    s.innerText = sec;
  } else {
    h.innerText = `${hrs}AM`;
    m.innerText = min;
    s.innerText = sec;
  }
}, 2000);
