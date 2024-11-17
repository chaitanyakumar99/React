import React, { useState } from "react";

let Message = () => {
    let [message, setMessage] = useState(10)
    let upHandeler=()=>{
   setMessage(value=>(value +10))
    }

    return <div>
        <h2>Message Value:{message}</h2>
        <button onClick={upHandeler}>Add</button>
    </div>

}

export default Message