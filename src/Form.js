import React,{useState} from "react";

function Form(){
    const [name,setName] = useState("")
    const [interest,setInterest] = useState(false)
    const [tnc, setTnc] = useState(false)

    function getFormData(e){
        e.preventDefault();
        console.log(name,interest,tnc);

    }
    return (
        <div>
            <h1>Handle Form in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/><br/><br/>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Select</option>
                    <option>Marble</option>
                    <option>Stationary</option>
                </select> <br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> Terms & conditions<br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;