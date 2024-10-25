import React from 'react'

class Message extends React.Component {
  msg = "Hello"
  changeMessage() {
    console.log("Txt case ")
    this.msg = "Good morning"
  }
  render() {
    return <div>
      <h2>Message Component</h2>
      <hr />
      <h2>Message:{this.msg}</h2>
      <hr />
      <button onClick={this.changeMessage()}>GM</button>
      <button>GN</button>
    </div>
  }

}

export default Message