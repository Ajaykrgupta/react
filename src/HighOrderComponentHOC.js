/**
 * Hight Order Component?
 * Ans: This component accept component as props and return as component it is called HOC.
 * 
 */

import React, { useState } from "react";
import { Button,Card} from 'react-bootstrap';

function HighOrderComponentHOC(){

    return(
        <div style={{textAlign:"center"}}>
            <h1>Hight Order Component(HOC)</h1>
            <HOC color="red" cmp={Counter} />
            <HOC color="green" cmp={Counter} />
            <HOC color="blue" cmp={Counter} />
            <HOC color="gray" cmp={Counter} />

        </div>
    )
}

function Counter(propsname){
    const [count, setCount] = useState(0);
    console.log(propsname);
    return(
        <div style={{ width: '10rem' }}>
            <h3>{count}</h3>
            <Button onClick={()=>setCount(count+1)}>Update</Button>{}
        </div>
    )
}

function HOC(props){
    return(
        <h2 style={{backgroundColor:props.color,width:"150px", height:"100px"}}><props.cmp/></h2>
    )
}


export default HighOrderComponentHOC;