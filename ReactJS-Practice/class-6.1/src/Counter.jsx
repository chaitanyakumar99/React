import React from "react";

class Counter extends React.Component {
   // counter = 1
   
    state={
        counter:1
    }
    IncrHandeler=()=>{
        this.setState({counter:this.state.counter +1})
    }
    DecrHandeler=()=>{
        this.setState({counter:this.state.counter -1})
    }
    render() {
        return <div>
            <h2>counter component</h2>
            <hr />
            <h3>CounterValue:{this.state.counter}</h3>
            <button onClick={this.IncrHandeler}>Incr</button>
            <button onClick={this.DecrHandeler}>Decr</button>
        </div>
    }

}

export default Counter