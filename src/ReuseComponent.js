import React from "react";
import './App.js'
import Userdetail from './Userdetail';

function ReuseComponent(){
    const USERS = [
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111},
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111},
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111},
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111},
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111},
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111},
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111},
        {name:"Ajay kumar", email:"ajay.krbca@gmail.com", contact:111}
    ]
    return(
        <div className="App">
            <h1>Reuse Component</h1>
            {
                USERS.map((item,index)=>
                    <Userdetail key={index} data={item}/>
                )
            }
        </div>
    )
}

export default ReuseComponent;