import React,{useEffect,useState} from "react";
import './App.css';
import { Table } from "react-bootstrap";

function GetApiCall(){
    // fetch("http://dummy.restapiexample.com/api/v1/employees").then((result)=>{
    //     result.json().then((resp)=>{
    //         console.log(resp)
    //     })
    // })
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((result)=>{
            result.json().then((resp)=>{
                setData(resp.data)
            })
        })
    },[])
    console.log(data);
    return(
        <div className="App">
            <h1>Get API Call</h1>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {
                        data.map((item)=>
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_age}</td>
                            <td>{item.employee_salary}</td>
                          </tr>
                        ) 
                  }
               </tbody>
              </Table>
         </div>
    )
}


export default GetApiCall;