// let cards = document.getElementsByClassName("cards")[0]
// let data = fetch("https://dummyjson.com/recipes").then((d)=>{
//     return(d.json)
// }).then((fd)=>{
//     let data = fd.recipes
//     data.map((e)=>{
//         let{id,image,name,ingredients,instructions}=e
//         cards.innerHTML+=`
//           <div class="cards">
//                 <h1>${e.id}</h1>
//                 <img src=${e.image} alt="">
//                 <p>${e.ingredinet}
//                 </p>
//                 <h3>${e.mealtType}</h3>
//                 <h4>time</h4>
//             </div>
//         `
//     })

// })

// let cards = document.getElementsByClassName("cards")[0];

// fetch("https://dummyjson.com/recipes")
//   .then((d) => d.json())
//   .then((fd) => {
//     let recipes = fd.recipes;
//     console.log(recipes);

//     recipes.map((e) => {
//       let { id, image, name, ingredients, mealType, prepTimeMinutes, rating ,instructions} =
//         e;

//       cards.innerHTML += `
//         <div class="card">
//          <h1>${id}</h1>
//           <img src="${image}" alt="">
//           <h1> ${name} </h1>
//           <p><strong>Ingredients:</strong><br>${ingredients}</p>
//           <p><strong>Instruction:</strong><br>${instructions}</p>

//           <p><strong>Meal type:</strong><br>${mealType}</p>

//           <p><strong>Preparing time:</strong><br>${prepTimeMinutes}</p>

//           <p><strong>Rating:</strong><br>${rating}</p>
                    
          
          
//         </div>
//       `;
//     });
//   });

// ************************************************************************8
// let breakfast = document.getElementsByClassName("nav")[0]

// let url = "https://dummyjson.com/recipes"
// let data = fetch(url).then((d)=>{
//   return(d.json())
// }).then((fd)=>{
//   let data = fd.recipes
//   breakfast.addEventListener("click",()=>{
//     data.filter((ele)=>{
//       let{id,name,image,ingredients,instruction,prepTimeMinutes,cookTimeMinutesk,mealType} = ele
//       ifele.mealtype.inlcude["Breakfast"])
//     })
    
//   })
// })

// 
let cards = document.getElementsByClassName("cards")[0];
let navItems = document.getElementsByClassName("nav");

let url = "https://dummyjson.com/recipes";

let data = fetch(url)
  .then((d) => {
    return d.json();
  })
  .then((fd) => {
    let data = fd.recipes;
    cards.innerHTML = "";

// SHOW ALL RECIPES INITIALLY
data.filter((ele) => {
  let {
    id,
    name,
    image,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    mealType,
  } = ele;

  cards.innerHTML += `
    <div class="card">
      <h1>${id}</h1>
      <h1>${name}</h1>
      <img src="${image}" alt="img loading...">

      <h5>Ingredients : ${ingredients}</h5>

      <p>
        <span>Instructions : </span>
        ${instructions}
      </p>

      <h3>Time required : ${prepTimeMinutes + cookTimeMinutes} min</h3>

      <h3>${mealType}</h3>
    </div>
  `;
});


    for (let i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("click", (e) => {
        e.preventDefault();

        let type = navItems[i].dataset.type;

        cards.innerHTML = ""; 
        data.filter((ele) => {
          let {
            id,
            name,
            image,
            ingredients,
            instructions,
            prepTimeMinutes,
            cookTimeMinutes,
            mealType,
          } = ele;

         
          if (ele.mealType && ele.mealType.includes(type)) {
            cards.innerHTML += `
              <div class="card">
                <h1>${id}</h1>
                <h1>${name}</h1>
                <img src="${image}" alt="img loading...">

                <h5>Ingredients : ${ingredients}</h5>

                <p>
                  <span>Instructions : </span>
                  ${instructions}
                </p>

                <h3>Time required : ${prepTimeMinutes + cookTimeMinutes} min</h3>

                <h3>${mealType}</h3>
              </div>
            `;
          }
        });
      });
    }
  });