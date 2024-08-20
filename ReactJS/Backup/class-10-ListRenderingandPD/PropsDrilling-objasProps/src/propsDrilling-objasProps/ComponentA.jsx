import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
  emp={
     eid:101,
     ename:"Rahul"
  }

  render() {
    return (
      <div>
        <h1>Component A</h1>
        <hr />
        <ComponentB emp_data1={this.emp}/>
      </div>
    )
  }
}


export default ComponentA

