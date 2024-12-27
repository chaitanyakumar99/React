import React, { Component } from 'react'

 class Employee extends Component {
  render() {
    return (
      <div>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr />
        <h2>Employee Id:{this.props.empId}</h2>
        <h2>Employee Name:{this.props.empName}</h2>
        <h2>Employee Details:{this.props.empDetails.loc}</h2>
      </div>
    )
  }
}

export default Employee