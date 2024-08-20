import React, { Component } from 'react'
import CompC from './CompC'

 class CompB extends Component {
  render() {
    return (
      <div>
        <h1>CompB</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr />
        <CompC eloc={this.props.eloc}/>
      </div>
    )
  }
}

export default CompB