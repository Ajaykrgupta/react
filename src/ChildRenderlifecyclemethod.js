import React from "react";


class ChildRenderlifecyclemethod extends React.Component{

    constructor(){
        super();
        console.log('Render');
    }

    render(){
        return (
            <div>
                <h1>Child Render Life Cycle Call</h1>
                <h4>{this.props.data}</h4>
            </div>
        )
    }

}

export default ChildRenderlifecyclemethod;