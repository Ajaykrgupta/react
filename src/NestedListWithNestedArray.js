import React from 'react';
import './App.js';
import Table from 'react-bootstrap/Table'

function NestedListWithNestedArray(){
    
    const USERS = [
        { name:'Ajay kumar', email:'ajay.krbca@gmail.com', address:[
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"}
        ] },
        { name:'Vinay kumar', email:'vinay.krbca@gmail.com', address:[
            {Hn:"15", city:"Noida", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"}
        ] },
        { name:'Mohit', email:'mohit@gmail.com', address:[
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"}
        ] },
        { name:'Vicky', email:'vicky@gmail.com', address:[
            {Hn:"13", city:"Delhi", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"}
        ] },
        { name:'Subodh', email:'subodh@gmail.com', address:[
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"}
        ] },
        { name:'sohan kumar', email:'sohan.kumar@gmail.com', address:[
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"}
        ] },
        { name:'Ajay kumar', email:'ajay.krbca@gmail.com', address:[
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"},
            {Hn:"10", city:"Gururam", country:"India"}
        ] }

    ]

    return(
        <div className='App'>
            <h1>Nested List With Nested Array</h1>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    USERS.map((item,index)=>
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><Table><tbody>{item.address.map((addr,index)=>
                      <tr key={index}>
                      <td>Address {index+1}</td>    
                      <td>{addr.Hn}</td>
                      <td>{addr.city}</td>
                      <td>{addr.country}</td>
                    </tr>
                       
                    )}</tbody></Table></td>
                    </tr>
                    )
                }
                
            </tbody>
            </Table>
        </div>
        
    )
}


export default NestedListWithNestedArray;