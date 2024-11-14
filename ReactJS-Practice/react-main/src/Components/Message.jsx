import React, { Component } from 'react'

class Message extends Component {
    
    // state;
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         message: "Hello"
    //     }
    // }

    state={
        message:"Hello"
    }
    updateHandeler = (value) => {
        this.setState({
            message:value
        })
    }
    render() {
        return (
            <div>
                <h2>Message Component</h2>
                <h2>Message Value:{this.state.message}</h2>
                <button onClick={this.updateHandeler.bind(this,"Good Morning")}>GM</button>
                <button onClick={this.updateHandeler.bind(this,"Good Afternoon")}>GA</button>
                <button onClick={this.updateHandeler.bind(this,"Good Night")}>GN</button>
            </div>
        )
    }
}

export default Message