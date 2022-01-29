import React from "react";
import Constructorlifecyclemethod from "./Constructorlifecyclemethod";


class ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        console.log('Constructor');
        this.state = {
            count:0
        }
    }

    componentDidUpdate(preProps, preState,snapshot){
        //console.log(preProps);
        //console.log(snapshot);
        console.log("Component Did Update",preState.count,this.state.count);
        // if(preState.count === this.state.count){
        //     alert('abc');
        // }
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
        
    }
    
    render(){
        console.log('Render');
        return(
            <div>
                <h1>Component Did Update {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update Name</button>
            </div>
        )
    }
}

export default ComponentDidUpdate;