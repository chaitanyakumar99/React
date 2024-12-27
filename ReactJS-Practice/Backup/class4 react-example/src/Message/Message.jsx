import React from 'react';

class Message extends React.Component {
  message = "Hello";
  name = "Rahul"
  employee = { eid: 101, ename: "varma", sal: 45000 }
  render() {
    return <div>
      <h2>Message component</h2>
      <hr />
      <h2>Message:{this.message}</h2>
      <h2>Name:{this.name}</h2>
      <hr />
      <h2>Employee Id:{this.employee.eid} ,and Sal:{this.employee.sal} </h2>
    </div>
  }
}

export default Message