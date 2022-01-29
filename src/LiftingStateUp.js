/*

Lifting state up Meas data transfer child component to parent component

*/

import React from "react";
import './App.js';
import LiftingStateUpOne from './LiftingStateUpOne';

function LiftingStateUp(){
    const name = "ajay kumar";
    function parentAlert(name){
        alert('Parent alert call: '+ name);
    }
    return (
        <div className="App">
            <h1>Lifting State Up Method</h1>
            <LiftingStateUpOne data={name} alert={parentAlert} />
        </div>
    )
}


export default LiftingStateUp;