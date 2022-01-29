import React from 'react';

class Constructorlifecyclemethod extends React.Component{

    constructor(){
        super();
        this.state = {
            name:"ajay"
        }
        console.log('constructor');
    }

    render(){
        console.log('render');
        return (
            <div>
            <h1>Constructor Life Cycle Method</h1>
            <h5>{this.state.name}</h5>
            <p6>Test Pros {this.props.data}</p6>
        </div>
        )
        
    }
}


export default Constructorlifecyclemethod;