/*
Should Component Update working on state false on render
return true then working
return false state value not render
but state value update

componentdidUpdate and shouldComponentUpdate both are calling
First calling => shouldComponentUpdate
Second calling => componentDidUpdate

*/


import React from "react";

class ShouldComponentDidUpdateMethod extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    componentDidUpdate(preProps, preState, snapshot){
        console.log("Component Did Update");
    }

    shouldComponentUpdate(){
        console.log('souldComponentUpdate', this.state.count);
        if(this.state.count<20){
            return true;
        }
        return false;
    }

    render(){
        return(
            <div>
                <h1>Should Component Did Update Method</h1>
                <p>Counter: {this.state.count}</p>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
            </div>
        )
    }
}

export default ShouldComponentDidUpdateMethod;