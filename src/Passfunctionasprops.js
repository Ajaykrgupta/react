import react from "react";


function Passfunctionasprops(props){
    return(
        <div>
            <h1>Pass Function  Props</h1>
            {/* <button onClick={()=>props.data()}>Click Me</button> */}
            <button onClick={props.data}>Click Me</button>
        </div>
    )
}

export default Passfunctionasprops;