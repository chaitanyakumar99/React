import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Counter Example </h2>
            <h3>Count Value:{count}</h3>
            <button onClick={()=>{(setCount(count +1))}}>Incr</button>
            <button onClick={()=>{(setCount(count -1))}}>Decr</button>
        </div>
    )
}

export default Counter