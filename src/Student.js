import React from 'react'

class Student extends React.Component{
   render(){
    console.log(this.props)
        return (
        <div>
         <h1>Student component</h1>
         <h2>{this.props.name}</h2>
         <h3>{this.props.email}</h3>
         </div>
         )
    }
}


export default Student;