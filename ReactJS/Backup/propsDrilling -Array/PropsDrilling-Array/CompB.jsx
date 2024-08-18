import React, { Component } from 'react'

 class CompB extends Component {
  render() {
    return (
      <div>
        <h1>CompB</h1>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

export default CompB