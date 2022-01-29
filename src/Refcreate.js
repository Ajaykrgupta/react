import React,{createRef} from "react";
import './App.css';

class Refcreate extends React.Component{
    constructor(){
        super();
        this.inputRef=createRef();
        console.log(this.inputRef);
    }
    componentDidMount(){
        console.log(this.inputRef.current.value="100");
    }
    getValue() {
        console.log(this.inputRef.current.value);
        //alert(this.inputRef.current.value);
        this.inputRef.current.style.color ="red";
        this.inputRef.current.style.backgroundColor ="blue";
    }
    render(){
        return(
            <div>
                <h1>Ref Hooks</h1>
                <input ref={this.inputRef} type="text"/>
                <button onClick={()=>this.getValue()}>Check Ref</button>
            </div>
        )
    }
}

export default Refcreate;