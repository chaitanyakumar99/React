import React from "react";

class Message3 extends React.Component{
    state={
        msg:"hello"
    }
    uphandeler=(value)=>{
        this.setState({msg:value})
    }
   
    render(){
        return <div>
            <h1>Messsage Component</h1>
            <h3>Value:{this.state.msg}</h3>
            <button onClick={this.uphandeler.bind(this,"Good morning")}>GM</button>
            <button onClick={this.uphandeler.bind(this, "Good Atfernoon")}>GA</button>
            <button onClick={this.uphandeler.bind(this, "Good Evening")}>GE</button>
            <button onClick={this.uphandeler.bind(this, "Good Night")}>GN</button>
        </div>
    }
}

export default Message3
