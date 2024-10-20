import React from 'react'

class Message extends React.Component{
    message="hello"
    ename="Rahul Gandhi"
    employee={eid:101,ename:"varma",esal:45000}
    render(){
        return <div>
          <h2>Message Component</h2>
          <hr />
          <h2>Message:{this.message}</h2>
          <h2>Name:{this.ename}</h2>
          <hr />
          <h2>Employee Id:{this.employee.eid},and sal:{this.employee.esal}</h2>
        </div>
    }
}

export default Message