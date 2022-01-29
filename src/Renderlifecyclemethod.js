import React,{useState} from "react";
import ChildRenderlifecyclemethod from './ChildRenderlifecyclemethod'

function Renderlifecyclemethod (){

        const [name, setName] = useState('Ajay');
    

    return (
            <div>
                <h1>Render Life Cycle Method</h1>
                <ChildRenderlifecyclemethod data={name}/>
                <button onClick={()=>setName('Sanjay')}>Clieck Me</button>
            </div>
        )
    

}

export default Renderlifecyclemethod;