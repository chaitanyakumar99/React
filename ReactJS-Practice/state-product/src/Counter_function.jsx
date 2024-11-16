import React, { useState } from 'react'

const Counter1 = () => {
    const [count, setCount] = useState(0)
    const incease = () => {
        setCount(count + 1)
    }
    const dec=()=>{
        setCount (count -1)
            
        
    }
  return (
    <div>
        <h2>Counter Examples</h2>
        <h2>Count Value :{count}</h2>
        <button onClick={incease}>Incr</button>
        <button onClick={dec}>Dec</button>
    </div>
  )
}

export default Counter1