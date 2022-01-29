import React, { Component } from 'react';
import {CommanContext} from './CommanContext';

export class Main extends Component {
  render() {
    return (
      <CommanContext.Consumer>
          {
            ({color})=>{
                <h1 style={{backgroudColor:color}}>Hello this is main page</h1>
            }
          }
      </CommanContext.Consumer>
    );
  }
}

export default Main;
