import React,{useRef} from "react";

function UncontrolledComponent(){
    let inputRef = useRef(null);
    let inputRef2 = useRef(null);
    function submitForm(e){
        e.preventDefault();
        console.log("Firt Field Value:", inputRef.current.value);
        console.log("Second Field Value:", inputRef2.current.value);
        let input3 = document.getElementById('msg').value;
        console.log("Second Third Value:", input3);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Uncontrolled component</h1>
            <form onSubmit={submitForm}>
                <input ref={inputRef} type="text" id="name" name="name"/><br/><br/>
                <input ref={inputRef2} type="text" id="email" name="email"/><br/><br/>
                <input type="text" id="msg" name="msg"/><br/><br/>
                <button>Click Me</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent;