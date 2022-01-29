/*
 UseEffect used in multple time in function
 use effect used to all cycle method in function 
 just like componentDidMount, componentDidUpdate, componentWilldidunmount
 

*/

import React,{useEffect,useState} from "react";

function UseEffect(){
    /*React.useEffect(
        ()=>{
            console.log('Use Effect');
        }
    )*/
    const [name,setName] = useState(0)
    useEffect(()=>{
        console.log('Use Effect');
    })
    useEffect(()=>{
        console.log('Use Effect 2');
    })
    return(
        <div>
            <h1>Use Effect Hooks</h1>
            <h5>{name}</h5>
            <button onClick={()=>{setName(name+1)}}>Click Me</button>
        </div>
    )
}

export default UseEffect;