import React,{useState} from "react";


const Message =()=>{
    let [msg,setMsg]=useState("Hello")
    let GmHandeler=()=>{
       setMsg("Good Morning")
    }
    let GnHandeler=()=>{
        setMsg("Good Night")
    }

    return <div>
        <h2>Message functional Component</h2>
        <hr />
        <h3>Message:{msg}</h3>

        <button onClick={GmHandeler}>GM</button>
        <button onClick={GnHandeler}>GN</button>


    </div>
}

export default Message