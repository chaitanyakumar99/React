import React, { Component } from 'react'

class ComponentB extends Component {
    render() {
        return (
            <div>
                <h1>ComponentB</h1>
                <pre>{JSON.stringify(this.props)}</pre>
            </div>
        )
    }
}

export default ComponentB