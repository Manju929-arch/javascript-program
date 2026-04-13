let cards = document.getElementsByClassName("cards")[0]
let data = fetch("https://dummyjson.com/quotes").then((d)=>{
    return d.json()
}).then((fd)=>{
    (fd.quotes)   
}).then((data)=>{
    data.map((ele)=>{
        let{id,quote,author}=quotes
        cards.innerHTML+=`
         <div class="card">
         <p id="id"> Id :${ele.id}</p>
          <p id="quotes"> Id :${ele.quote}</p>
          <p id="author"> Id :${ele.author}</p>

         
        `
    })
})