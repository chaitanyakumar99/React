import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const IncrHamdeler = () => {
        setCount(count + 1)
    }
    const DecrHandeler=()=>{
        setCount(count -1)
    }
    return (
        <div>
            <h2>Counter Example </h2>
            <h3>Count Value:{count}</h3>
            <button onClick={IncrHamdeler}>Incr</button>
            <button onClick={DecrHandeler}>Decr</button>
        </div>

    )
}

export default Counter