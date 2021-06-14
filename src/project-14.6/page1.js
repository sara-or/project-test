import React, { useState } from 'react'

 export default function  Page1(props) {
    function sendUser(user){
        console.log("user")
         console.log(user);
         //send user to node

     }
     const [name ,setName]=useState("")
     const [ageUser ,setAge]=useState(20)
     const [city ,setCity]=useState("")
     const [phone ,setPhone]=useState("")
     const [email ,setEmail]=useState("")
    const user = {
       fullName: name,
        age: ageUser,
        
        city: city,
        phone:phone, 
        email: email,
    };
      


    return (

        <>
        <h1>page1</h1>
        <div>
         
          
        <label>full_name</label><input value={user.fullName}
        onChange={(e) => setName(name => e.target.value)}></input>
        <label>age</label><input value={user.age}
        onChange={(e) => setAge(age => e.target.value)}></input>
        <label>city</label><input value={user.city}
        onChange={(e) => setCity(city => e.target.value)}></input>
        <label>email</label><input value={user.email}
        onChange={(e) => setEmail(email => e.target.value)}></input>
        <label>phone</label><input value={user.phone}
        onChange={(e) => setPhone(phone => e.target.value)}></input>
        </div>
        <button
        onClick={sendUser(user)}
          >sendDeatails
                        </button>
        </>
    )
}
