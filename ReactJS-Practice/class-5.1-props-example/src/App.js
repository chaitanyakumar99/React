import React from "react";
import Navbar from './Navbar/Navbar'
import User from "./propsEx/User";

let App=()=>{
  return <div>
     <Navbar/>
     <h2>App component</h2>
     <hr />
     <User/>
   </div>
}

export default App