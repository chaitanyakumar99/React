import React, { Component } from 'react'
import ComponentD from './ComponentD'

 class CompoentC extends Component {
  render() {
    return (
      <div>
        <h1>Component C</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr />
        <ComponentD emp_data={this.props.emp_data}/>
        </div>
    )
  }
}


export default CompoentC