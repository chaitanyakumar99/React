import React, { Component } from 'react'

class Message extends Component {
  state;
  constructor(props) {
    super(props)
    console.log("First constructor");
    this.state = ({ msg: "Hello" })
  }
  updateHandeler = (value) => {
    this.setState({ msg: value })
  }
  render() {
    return (
      <div>
        <h1>Message Component</h1>
        <h3>value:{this.state.msg}</h3>
        <button onClick={this.updateHandeler.bind(this, "Good Morning")}>GM</button>
        <button onClick={this.updateHandeler.bind(this, "Good Afternoon")}>GA</button>
        <button onClick={this.updateHandeler.bind(this, "Good Evening")}>GE</button>
        <button onClick={this.updateHandeler.bind(this, "Good Night")}>GE</button>
      </div>
    )
  }
}

export default Message

