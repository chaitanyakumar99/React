import React from 'react'
import Message from './Messages/Message'
import store from './redux/Store'
import { provider } from 'react-redux'


const App = () => {
  return <div>
    <provider store={store}>
      <h1>App component</h1>
      <hr />
      <Message />
    </provider>
  </div>

}

export default App