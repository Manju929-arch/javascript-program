// let data2 = fetch("https://dummyjson.com/products").then((d)=>{
//         return(d.json())

// }).then((fd)=>{
//     console.log(fd.products)
// // })
// let data2 = fetch("https://fakestoreapiserver.reactbd.org/api/products").then((d)=>{
//         return(d.json())

// }).then((fd)=>{
//     console.log(fd.products)
// })

let card = document.getElementsByClassName("cards")[0];
console.log(card);
let data = fetch("https://fakestoreapiserver.reactbd.org/api/products")
  .then((d) => {
    return d.json();
  })
  .then((fd) => {
    let data = fd.data
    data.map((ele) => {
        console.log(ele)
        let {_id,title,image,description,category,brand,price} =ele
      card.innerHTML += `
                    <div class="card">
                
                <h5>${ele._id}</h5>
                <h1>${ele.title}</h1>
                <img src=${ele.image} alt="" srcset="">
                <p> ${ele.description}</p>
                <h3>${ele.category}</h3>
                <h3>${ele.brand}</h3>
                <h3>${ele.price}</h3>
            </div>`;
    });
  });

