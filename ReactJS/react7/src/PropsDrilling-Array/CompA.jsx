import React, { Component } from 'react'
import CompB from './CompB'


class CompA extends Component {
    loc=['Hyderabad','Bangalore','Vijayawada']
  render() {
    return (
      <div>
        <h1>CompA</h1>
        <hr />
        <CompB eloc={this.loc}/>
        
      </div>
    )
  }
}

export default CompA