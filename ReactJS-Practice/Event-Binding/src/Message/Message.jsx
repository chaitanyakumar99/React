import React, { Component } from 'react'

class Message extends Component {
    state = {
        message: "hello"
    }
    upHandeler=(value)=>{
        this.setState({
            message:value
        })
    }
    render() {
        return (
            <div>
                <h2>Message:{this.state.message}</h2>
                <button onClick={this.upHandeler.bind(this,"Good Morning")}>Gm</button>
                <button onClick={this.upHandeler.bind(this,"Good Afternoon")}>GA</button>
                <button onClick={this.upHandeler.bind(this,"Good Evening")}>GE</button>
            </div>
        )
    }
}

export default Message