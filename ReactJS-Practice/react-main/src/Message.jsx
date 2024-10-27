import React from 'react'

class Message extends React.Component {
  msg = "Hello"
  gmHandler=()=> {
    console.log("Txt case")
    this.msg = "Good morning"
    console.log(this.msg)
    this.forceUpdate()
  }

  gnHandler = () => {
    this.msg = "Good Night"
    this.forceUpdate()

  }
  render() {
    return <div>
      <h2>Message Component</h2>
      <hr />
      <h2>Message:{this.msg}</h2>
      <hr />
      <button onClick={this.gmHandler}>GM</button>
      <button onClick={this.gnHandler}>GN</button>
    </div>
  }

}

export default Message