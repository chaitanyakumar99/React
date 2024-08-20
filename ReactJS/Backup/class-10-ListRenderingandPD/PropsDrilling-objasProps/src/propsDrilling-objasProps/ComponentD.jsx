import React, { Component } from 'react'

 class ComponentD extends Component {
  render() {
    return (
      <div>
        <h1>Component D</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr />
        </div>
    )
  }
}


export default ComponentD