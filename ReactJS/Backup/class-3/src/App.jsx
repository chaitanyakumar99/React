import React from 'react'
import Message from "./component/Message"
import Txt from './component/Txt'
import User from './component/User'
const App = () => {
  return (
    <div>
        <h1>App Component</h1>
        <Message />
        <Txt/>
        <User/>
    </div>
  )
}

export default App