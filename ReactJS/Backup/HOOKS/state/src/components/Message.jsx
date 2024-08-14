import React from "react";

class Message extends React.Component{
    state={
        msg:"hello"
    }
    gmhandeler=()=>{
        this.setState({msg:"Good morning"})
    }
    gahandeler=()=>{
        this.setState({msg:"Good Afternoon"})
    }
    gehandeler=()=>{
        this.setState({msg:"Good evening"})
    }
    gnhandeler=()=>{
        this.setState({msg:"Good night"})
    }
    render(){
        return <div>
            <h1>Messsage Component</h1>
            <h3>{this.state.msg}</h3>
            <button onClick={this.gmhandeler}>GM</button>
            <button onClick={this.gahandeler}>GA</button>
            <button onClick={this.gehandeler}>GE</button>
            <button onClick={this.gnhandeler}>GN</button>
        </div>
    }
}

export default Message