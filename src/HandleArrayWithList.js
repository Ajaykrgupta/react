import React from 'react';
import './App.css'
import Table from 'react-bootstrap/Table'

function HandleArrayWithList() {
    const STUDENT = ['Ajay', 'Raj', 'Mohit', 'Rohan', 'Amit'];
    /*STUDENT.map((item)=>{
        console.log('My Name : '+item);
    })
    for(let i=0;i<STUDENT.length;i++){
        console.log('My Name For loop: '+STUDENT[i]);
    }*/
    const data = [
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:15},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:25},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:35},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:45},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:55},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:75},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:85},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:95},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65},
        {name:"ajay",email:"ajay.krbca@gmail.com",mobile:4353535,age:65}
    ];
    return (
        <div className=' App'>
            <h1>Handle array and using Map and forEach</h1>
            {/* {
                STUDENT.map((name) =>
                    <h5 key={name}>Name is {name}</h5>
                )
            } */}
            <Table striped bordered hover variant='dark'>
  <thead>
    <tr>
      <th>Sr No</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    
    
     
            {
                data.map((item,index)=>
                    item.age === 65?
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.age}</td>
                    </tr>:null
                )
            }
            </tbody>
</Table> 
        </div>
    )
}

export default HandleArrayWithList;