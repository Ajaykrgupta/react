import react from "react";


function Childcomponent(props){
    return(
        <div>
            <h1>Child Component  Props</h1>
            {/* <button onClick={()=>props.data()}>Click Me</button> */}
            <button onClick={props.data}>Click Me</button>
        </div>
    )
}

export default Childcomponent;