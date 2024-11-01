import React, { Component } from 'react'

class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>Compponet B</h2>
        <pre>{JSON.stringify(this.props.emp)}</pre>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
      </div>
    )
  }
}

export default ComponentB