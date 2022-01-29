import React,{useEffect, useState} from 'react'
import UseEffectData from './UseEffectData';

function UseEffectHooks(){
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);
    /*useEffect(()=>{
        console.log('Callwith data state')
    }, [data])
    useEffect(()=>{
        console.log('Callwith count state')
    }, [count])*/
    return(
        <div>
            <h1>Use Effect Hooks</h1>
            {/* <h1>Count: {count}</h1>
            <h1>Data: {data}</h1> */}
            <UseEffectData count={count} data={data}/>
            <button onClick={()=>{setCount(count+1)}}>Counter</button>
            <button onClick={()=>{setData(data+1)}}>Data Counter</button>
        </div>
    )
}


export default UseEffectHooks;