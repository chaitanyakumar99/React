import React from 'react';

class Message extends React.Component{
    state={
        msg:"Hello"
    }
    gmHandeller=()=>{
        this.setState({msg:"Good morning"})
    }
    gmHandeller=()=>{
        this.setState({msg:"Good morning"})
    }
    render(){
        return <div>
        <h2>Value:{this.state.msg}</h2>
        <button onClick={this.setState}>Gm</button>
        <button onClick={this.setState}>Gn</button>
        </div>
    }
}

export default Message