import React,{useState, useMemo} from "react";
import './App.js';
import { Button } from "react-bootstrap";

function UseMemoHoooks(){
    const [count,setCount] = useState(1);
    const [item, setItem] = useState(10);
    
    const multiCountMemo = useMemo(
        function multiCount(){
            console.log('Multi Counter');
            return count*4;
        }, [count])
    return(
        <div className="App">
            <h1>Use Memo Hooks</h1>
            <h4>Count: {count}</h4>
            <h4>Item: {item}</h4>
            <h2>{multiCountMemo}</h2>
            <Button onClick={()=>setCount(count+1)}>Update Count</Button>
            <Button onClick={()=>setItem(item*6)}>Update Item</Button>
        </div>
    )
}

export default UseMemoHoooks;