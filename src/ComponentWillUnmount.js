/*
Component Will Unmount =>

When my component remove to dom component will unmount calling.

example hide show component.

component will unmount class component hi hona chahiye...

last study
https://www.youtube.com/watch?v=WoUpht1zcG0&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=29

*/

import React from "react";
import ToggleChildComponent from './ToggleChildComponent';

class ComponentWillUnmount extends React.Component{
    constructor(){
        super();
        this.state={show:true}
    }
    componentDidUpdate(preProps, preState, snapshot){
        console.log("component did update",preState.show);
    }

    
    render(){
        return(
            <div>
                <h3>Component Will Un Mount</h3>
                <h4>{this.state.name}</h4>
                {this.state.show?<ToggleChildComponent/>:""}
                
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child Component</button>
            </div>
        )
    }
}

export default ComponentWillUnmount;
