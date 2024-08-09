
import React from "react";

class Message extends React.Component {
    hello() {
        return <div>
            <h1>Hello</h1>
        </div>
    }
    render(){
        // console.log("first render method");
        return <div>
            <h2>Message Component</h2>
        </div>
    }
}

export default Message