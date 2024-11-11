import React, { Component } from 'react'
import ComponetB from './ComponentB'

class ComponentA extends Component {
    emp_details={
        id:101,
        name:"Rahul",
        sal:45000,
        loc:"Hyd"
    }
    render() {
        return (
            <div>
                <h1>ComponentA</h1>
                <hr />
                <ComponetB Employee={this.emp_details} />
            </div>
        )
    }
}

export default ComponentA