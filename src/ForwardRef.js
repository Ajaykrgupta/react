import React,{useRef} from "react";
import ForwardRefChild from './ForwardRefChild';

function ForwardRef(){
    let inputRef = useRef(null);
    function updateInput(){
        inputRef.current.value="1000";
        inputRef.current.style.color="red";
        inputRef.current.style.backgroundColor="black";
        inputRef.current.focus();
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Forward Reference</h1><br/><br/>
            <ForwardRefChild  ref={inputRef}/><br/><br/>
            <button onClick={updateInput}>Update Input Box</button>
        </div>
    )
}

export default ForwardRef;