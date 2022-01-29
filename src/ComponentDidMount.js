import React from "react";

class ComponentDidMount extends React.Component{
    constructor(){
        super();
        console.log('constructor');
        this.state={
            name:"Ajay kumar"
        }
    }
    componentDidMount(){
        console.log('Component Did Mount');
    }
    render(){
        console.log('Render');
        return(
            <div>
                <h1>Component Did Mount {this.state.name}</h1>
                <button onClick={()=>{this.setState({name:'Ramu'})}}>Click Me</button>
            </div>
        )
    }
}

export default ComponentDidMount;