import React, { useState } from "react"

let Message = () => {
    let [message, SetMessage] = useState("Hello")
    let updateHandeler=(value)=>{
     SetMessage(value)
    }
    return <div>
        <h2>Message Component  </h2>
        <h2>Message value:{message}</h2>
        <button onClick={updateHandeler.bind(null,"Good morning") }>GM</button>
        <button onClick={updateHandeler.bind(null,"Good Aternoon")}>GA</button>
        <button onClick={updateHandeler.bind(null,"Good Evenning")}>GE</button>
        <button onClick={updateHandeler.bind(null,"Good Night")}>GN</button>
    </div>
}

export default Message