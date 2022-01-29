import React from "react";

class ToggleChildComponent extends React.Component{
    
    componentWillUnmount(){
        console.log('componentWillUnmount Calling');
    }
    render(){
        return (
            <div>
                <h1>Child Component Data</h1>
            </div>
        )
    }
}

export default ToggleChildComponent;