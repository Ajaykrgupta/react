import React,{useEffect, useState} from 'react'

function UseEffectData(props){
    useEffect(()=>{
        console.log('Call with count state')
    },[props.count])
    return(
        <div>
            <h1>Count Props: {props.count}</h1>
            <h1>Data Props: {props.data}</h1>
        </div>
    )
}

export default UseEffectData;