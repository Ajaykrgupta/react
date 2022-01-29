
import React, { PureComponent } from 'react';

class PureComponentProps extends PureComponent{
    constructor(){
        super();
    }
    render(){
        console.log("Check Re-rending");
        return(
            <div className='App'>
                <h1>User Component Count: {this.props.count}</h1>
            </div>
        )
    }
}

export default PureComponentProps;