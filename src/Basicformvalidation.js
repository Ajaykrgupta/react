import React,{useState} from "react";

function Basicformvalidation(){
    const [user,setUser] = useState('')
    const [password, setPassword] = useState('')
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    function formHandle(e){
        e.preventDefault();
        if(user.length<3){
            setUserErr(true)
        } else if(password.length<4){
            setPassErr(true)
        }
        else{
            
            alert('Good :)' + user + password);
        }
    }
    function userHandler(e){
        let item = e.target.value;
        if(item.length<3){
            setUserErr(true)
        }else{
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let pass = e.target.value;
        if(pass.length<4){
            setPassErr(true)
        }else{
            setPassErr(false)
        }
        setPassword(pass)
    }
    return(
        <div>
            <form onSubmit={formHandle}>
                <h1>Form Validation</h1>
                <input type="text" placeholder="Enter user id" onChange={userHandler}/>
                {userErr?<span>User not valid</span>:""}
                <br/><br/>
                <input type="text" placeholder="Enter Your Password" onChange={passwordHandler}/>
                {passErr?<span>Password not valid</span>:""}
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Basicformvalidation;

