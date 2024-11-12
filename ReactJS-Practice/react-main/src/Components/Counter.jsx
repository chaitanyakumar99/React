import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 1
    }
    IncrHandeler = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    DecrHandeler=()=>{
        this.setState({counter:this.state.counter -1})
    }
    render() {
        return (
            <div>
                <h2>Counter Component</h2>
                <hr />
                <h3>Counter Value:{this.state.counter}</h3>
                <button onClick={this.IncrHandeler}>Inc</button>
                <button onClick={this.DecrHandeler}>Decr</button>
            </div>
        )
    }
}

export default Counter