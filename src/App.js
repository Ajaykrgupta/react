import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Student from './Student';
//import React from 'react';
import {CommanContext} from './component/CommanContext'
import {Main} from './component/Main';

class App extends React.Component {
  constructor(){
     super();
     this.state = {
       color:"green",
       updateColor: this.updateColor
     }
     this.updateColor = () =>{
       this.setState({
         color:"red"
       })
     }
     
  }

  render() {
    return(
        <CommanContext.Provider value={this.state}>
          <h1>Common Context API</h1>
          <Main />
        </CommanContext.Provider>
        
        
    )
    
  }
    
}

export default App;
