import React, { useState } from "react";


function Ifelseconditional() {
    const [loggedin, setLoggedin] = useState(1);
        return (
            <div>
                <select onChange={(e)=>setLoggedin(e.target.value)} value={loggedin}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                {loggedin==1?
                <h1>Welcome 1</h1>
                :loggedin==2?<h1>Welcome 2</h1>
                :<h1>Welcome 3</h1>}
            </div>
        )
    

}

export default Ifelseconditional; 