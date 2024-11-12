import React, { Component } from 'react'

class Message1 extends Component {
    state = {
        msg: "Hello"

    }
    gmHandeler = () => {
        this.setState({
            msg: "Good Morning"
        })
    }
    gnHandeler=()=>{
        this.setState({
            msg:"Good Night"
        })
    }
    render() {
        return (
            <div>
                <h1>Message1 Component</h1>
                <hr />
                <h2>Message:{this.state.msg}</h2>
                <button onClick={this.gmHandeler}>GM</button>
                <button onClick={this.gnHandeler}>GN</button>
            </div>
        )
    }
}

export default Message1