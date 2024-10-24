import React from "react";
import Navbar from './Navbar/Navbar'
import ComponentA from './Components/ComponentA'

let App=()=>{
  return <div>
     <Navbar/>
     <h2>App component</h2>
     <hr />
     <ComponentA/>
   </div>
}

export default App