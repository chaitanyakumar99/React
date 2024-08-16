import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class Message extends Component {
  emp={
    eid:101,
    ename:"Rahul"
  }
  render() {
    return (
      <div>
        <h1>Component A</h1>
        <hr />
        <ComponentB/>
        <pre></pre>
        </div>
    )
  }
}

export default Message

