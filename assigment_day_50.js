// let id = document.getElementById("id");
//         let firstName = document.getElementById("firstName");
//         let lastName = document.getElementById("lastName");
//         let age = document.getElementById("age")
//         let gender = document.getElementById("gender")
//         let email = document.getElementById("email")
//         let contactNumber = document.getElementById("contactNumber")
//         let bloodGroup = document.getElementById("bloodGroup")
//         let address = document.getElementById("address")
//         let role = document.getElementById("role")

        let cards = document.getElementsByClassName("cards")[0]

        let data = fetch("https://dummyjson.com/users").then((d)=>{
            return d.json()
        }).then((fd)=>{
            return fd.users
        }).then((userData)=>{
            userData.map((user)=>{
                let {id,firstName,lastName,age,gender,email,phone,address,bloodGroup,role,image} = user
                cards.innerHTML += `
                    <div class="card">
                        <img src="${image}" alt="img loading...">
                        <p id="id"> Id :${id}</p>
                        <p id="firstName"> Name :${firstName} ${lastName}</p>
                        <p id="age"> Age :${age}</p>
                        <p id="gender"> Gender :${gender}</p>
                        <p id="email"> Email :${email}</p>
                        <p id="contactNumber"> Phone :${phone}</p>
                        <p id="address"> Address :${address.address},${address.city},${address.state}</p>
                        <div class="span1">
                            <span id="bloodGroup"> Blood Group :${bloodGroup}</span>
                            <span id="role"> Role :${role}</span>
                        </div>  
                    </div>
                `
            })
        })
