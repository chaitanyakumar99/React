import React, { Component } from 'react'

class Counter extends Component {
    state = {
        qty: 1
    }
    IncrHandeler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    DecHandeler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return (
            <div>
                <h2>Counter Exmple</h2>
                <h2>Count:{this.state.qty}</h2>
                <button onClick={this.IncrHandeler}>Incr</button>
                <button onClick={this.DecHandeler}>Dec</button>
            </div>
        )
    }
}

export default Counter