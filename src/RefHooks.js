import React,{useRef} from "react";
import './App.css';


function RefHooks(){
    let inputRef = useRef(null);
    
    function handleInput() {
        console.log('fdff');
        inputRef.current.value = "100000";
        inputRef.current.focus();
        inputRef.current.style.color="blue";
        inputRef.current.style.display="none";
    }
    
    return(
        <div className="App">
            <h1>Use Ref Hooks</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>handleInput()}>Check Ref</button>
        </div>
    )
}

export default RefHooks;