/*
What is Pure Component?
Ans:- Pure component used to only class componet it is working break to time to time re-rendering. Just like check the state and props update and data matching if data is matching then break rendering otherwise rendering.

=> In Function component is used memo  for pure component.

=> Checking before state name and current state name matched then not rendring otherwise rendering.

*/

import React,{PureComponent as Pure} from 'react';
import './App.css'
import { Button } from 'react-bootstrap';
import PureComponentProps from './PureComponentProps';

class PureComponent extends Pure{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        console.log("Check Re-rending");
        return(
            <div className='App'>
                <h1>Pure Component Count: {this.state.count}</h1>
                <PureComponentProps count={this.state.count}/>
                <Button onClick={()=>this.setState({count:this.state.count})}>Counter</Button>
            </div>
        )
    }
}

export default PureComponent;