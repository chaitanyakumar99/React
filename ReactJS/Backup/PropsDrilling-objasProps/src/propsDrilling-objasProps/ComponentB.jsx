import React, { Component } from 'react'
import CompoentC from './ComponentC'

 class ComponentB extends Component {
  render() {
    return (
      <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr />
        <CompoentC/>
        </div>
    )
  }
}


export default ComponentB