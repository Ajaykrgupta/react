/*

Lifting state up Means data transfer child component to parent component

*/

import React from "react";
import './App.js';
import { Button } from "react-bootstrap";


function LiftingStateUpOne(props){
    const name ="Child Ajay kumar"
    return (
        <>
            <h1>My Name: {props.data}</h1>
            <Button onClick={()=>props.alert(name)}>Click Me</Button>
        </>
    )
}


export default LiftingStateUpOne;