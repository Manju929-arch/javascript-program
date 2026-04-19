let complete= document.getElementsByClassName("true")[0];



let task = async()=>{
    let data = await fetch("https://dummyjson.com/todos")
    let finaldata = await data.json()
    let todos = finaldata.todos
    
    todos.map((d)=>{
        let{id,todo,completed,userId}=d
        complete.innerHTML +=`
    <div class=${completed ? "true" : "false"}>
            <h1>${id}</h1>
            <h3>${todo}</h3>
            <h4>${completed}</h4>
        </div>
       

    `

    })
    
}
task();

