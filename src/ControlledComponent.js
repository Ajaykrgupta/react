/**
 * What is controlled component?
 * Ans:- Component use input field and manage by recat state.
 */

import React,{useState} from "react";

function  ControlledComponent() {
    const [val,setVal] = useState("1200");
    const [item,setItem] = useState("10");
    const [name,setName] = useState("Ajay");
    return(
        <div style={{textAlign:"center"}}>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <div>
                <p>Name: {name}</p>
                <p>Item: {item}</p>
                <p>Amount: {val}</p>
            </div>
        </div>        
    )
}

export default ControlledComponent;