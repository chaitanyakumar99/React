import { useState } from "react"

let Message2=()=>{
    let [msg,setMsg]=useState("Hello")

    let updateHandeler=(value)=>{
        console.log(value);

        setMsg(value)
    }
    return <div>
        <h1>Message2 Component</h1>
        <h3>Value:{msg}</h3>
        <button onClick={updateHandeler.bind(null,"good morning")}>Gm</button>
        <button onClick={updateHandeler.bind(null,"good afternoon")}>Ga</button>
        <button onClick={updateHandeler.bind(null,"good evening")}>Ge</button>
        <button onClick={updateHandeler.bind(null,"good night")}>Gn</button>
        
    </div>
}

export default Message2