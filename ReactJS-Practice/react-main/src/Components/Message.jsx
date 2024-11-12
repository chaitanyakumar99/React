import React, { Component } from 'react'

class Message extends Component {
    msg = "Hello"
    gmHandeler = () => {
        this.msg = "Good Morning"
        this.forceUpdate()
    }
    gnHandeler=()=>{
        this.msg="Good Night"
        this.forceUpdate()
    }
    render() {
        return (
            <div>

                <h1>Message Component</h1>
                <hr />
                <h1>{this.msg}</h1>
                <button onClick={this.gmHandeler}>Gm</button>
                <button onClick={this.gnHandeler}>Gn</button>
            </div>

        )
    }
}

export default Message