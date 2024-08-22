import React from 'react'
import './message.css'

let msgstyles_interval={color:'green'}

const Message = () => {
  return (
    <div>
        <h2>Message Component</h2>
        <hr />
        <h3 style={{color:'red',background:'yellow'}}>Good Morning</h3>
        <h3 style={msgstyles_interval}> Good Afternoon</h3>
        <h3 className={'msgstyles'}>Good Night</h3>
    </div>
  )
}

export default Message