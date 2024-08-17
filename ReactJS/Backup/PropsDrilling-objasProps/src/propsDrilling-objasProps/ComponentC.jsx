import React, { Component } from 'react'
import ComponentD from './ComponentD'

 class CompoentC extends Component {
  render() {
    return (
      <div>
        <h1>Component C</h1>
        <hr />
        <ComponentD/>
        </div>
    )
  }
}


export default CompoentC