import React from "react";
import './Counter.css'


class Counter extends React.Component {

   // counter = 1;

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
        return <div>
            <h2>Counter Component</h2>
            <hr />
            <h2>Counter Value:{this.state.counter}</h2>
            <button className="one" onClick={this.IncrHandeler}>INCR</button>
            <button className="two" onClick={this.DecrHandeler}>DECR</button>

        </div>
    }

}

export default Counter