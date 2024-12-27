import React from "react";

class Message extends React.Component {
  //msg="Hello"

  state={
    msg:"Hello"
  }

  gmHandeler=()=>{
   this.setState({
    msg:"Good Morning"
   })
  }

  gnHandeler=()=>{
    this.setState({
      msg:"Good Night"
    })
  }

  render() {
    //console.log("Render method")
    return <div>
      <h2>Message Component</h2>
      <hr />
      <h2>Message:{this.state.msg}</h2>
      <button onClick={this.gmHandeler}>GM</button>
      <button onClick={this.gnHandeler}>GN</button>
    </div>
  }
}

export default Message 