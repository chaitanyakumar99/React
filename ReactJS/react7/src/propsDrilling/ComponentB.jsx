import React, { Component } from 'react'
import CompoentC from './ComponentC'

export class Message extends Component {
  render() {
    return (
      <div>
        <h1>Component B</h1>
        <hr />
        <CompoentC/>
        </div>
    )
  }
}

export default Message