
function Userdetail(props){
    return (
        <div>
            <span style={{backgroundColor:"grey",padding:"10px",fontSize:"20px",color:"#fff",lineHeight:"60px"}}>{props.data.name}</span>
            <span style={{backgroundColor:"grey",padding:"10px",fontSize:"20px",color:"#fff",lineHeight:"60px"}}>{props.data.email}</span>
            <span style={{backgroundColor:"grey",padding:"10px",fontSize:"20px",color:"#fff",lineHeight:"60px"}}>{props.data.contact}</span>
        </div>
            )
}

export default Userdetail;