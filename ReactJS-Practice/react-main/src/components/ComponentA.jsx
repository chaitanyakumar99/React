import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {

  emp = [
    {
      eid: 101,
      name: "Rahul",
      loc: "Hyderabad",
      sal: 45000,
      id_Number: 4555555555544,
      Mobile_no: 9645234597,
      Alt_mobile_no: 7245745593,
      DOB: 19 - 3 - 2000,
    }, {
      empty: "no data"

    }
  ]

  render() {
    return (
      <div>
        <h2>Component A</h2>
        <hr />

        <ComponentB emp={this.emp[0]} fjyrht={"jjjjjj"} />
      </div>
    )
  }
}

export default ComponentA