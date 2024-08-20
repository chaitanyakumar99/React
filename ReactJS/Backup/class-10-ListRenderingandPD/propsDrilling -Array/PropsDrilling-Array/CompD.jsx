import React, { Component } from 'react'

 class CompD extends Component {
  render() {
    return (
      <div>
        <h1>CompD</h1>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

export default CompD