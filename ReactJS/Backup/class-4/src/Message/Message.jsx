import React from "react";

class Message extends React.component{
    hello(){
        return <div>
        <h2>hello</h2>
        </div>
    }
    render(){
        console.log("First render method");
        return <div>
            <h3>Message component</h3>
        </div>
    }
}

export default Message