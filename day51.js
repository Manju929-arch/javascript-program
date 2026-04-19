// // let data = fetch("https://fakestoreapiserver.reactbd.org/api/products").then((d)=>{
// //     return d.json()
// // }).then((fd)=>{
// //     console.log(fd.data )
// // })
// let cards = document.getElementsByClassName("cards")[0]
// let task = async ()=>{
//     let data = await fetch("https://dummyjson.com/carts")
//     let fd = await data.json()
//     let card =  await fd.carts
//     console.log(card)
//     console.log(card[29].products)
//     card.map((ele)=>{
//         let{id,products,total,discountedTotal,userId,totalQuantity} = card
//     cards.innerHTML+= `
//     <div class="cards">
//             <h1>product ID ${id}</h1>
//             <h3>${userId}</h3>

//                 <h3>User Id${products}</h3>
//                 <img src="" alt="">



//                 <h3>Total ${total}</h3>
//                 <h3>Discount ${discountedTotal}</h3>
//                 <h3>Total quatity ${totalQuantity} </h3>

//             </div>


//     `
 

//     })
    

        
// }
// task();


let container = document.getElementsByClassName("cards")[0];

let task = async () => {

        let res = await fetch("https://dummyjson.com/carts");
        let data = await res.json();

        let carts = data.carts;

        carts.map((cart) => {
            let { id, products, total, discountedTotal, userId, totalQuantity } = cart;

           
            let productHTML = products.map((p) => {
                return `
                    <div class="product">
                        <h4>Product: ${p.title}</h4>
                        <img src="${p.thumbnail}" width="100"/>
                        <p>Price: ${p.price}</p>
                        <p>Quantity: ${p.quantity}</p>
                        <p>Total: ${p.total}</p>
                        <p>Discounted: ${p.discountedTotal}</p>
                    </div>
                `;
            }).join(""); 

            container.innerHTML += `
                <div class="card">
                    <h2>Cart ID: ${id}</h2>
                    <h3>User ID: ${userId}</h3>
                    <p>Total: ${total}</p>
                    <p>Discounted Total: ${discountedTotal}</p>
                    <p>Total Quantity: ${totalQuantity}</p>

                    <h3>Products:</h3>
                    ${productHTML}
                </div>
            `;
        });

    }

task();