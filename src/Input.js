import React,{useState} from "react";

function Input(){

        const [data, setData] = useState(null)
        function getData(val){
            console.log(val.target.value);
            setData(val.target.value)
        }
        return(
            <div>
                <h1>Get Input box Value? {data}</h1>
                <input type="text" onChange={getData}/>
            </div>
        )
    
}

export default Input;