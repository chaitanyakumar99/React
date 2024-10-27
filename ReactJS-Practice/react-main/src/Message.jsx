import React from "react";

class Message extends React.Component {
  //msg="Hello"

  state={
    msg:"Hello"
  }
  render() {
    return <div>
      <h2>Message Component</h2>
      <hr />
      <h2>Message:{this.state.msg}</h2>
    </div>
  }
}

export default Message