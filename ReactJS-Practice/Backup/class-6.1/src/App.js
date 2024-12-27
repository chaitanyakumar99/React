import React from "react";
import Navbar from './Navbar/Navbar'
import Message from "./Message";
import Counter from "./Counter";
let App = () => {
  return <div>
    
    <Navbar />
    <h2>App component</h2>
    <hr />
    <Counter/>
  </div>
}

export default App