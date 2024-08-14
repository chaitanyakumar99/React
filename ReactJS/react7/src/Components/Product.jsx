const { useState } = require("react")

let Product = () => {
    let [msg, state1] = useState("Hi")
    let [msg1, state2] = useState("Good Morning")

    let Handeler=()=>{
      state1("Hello....")
    }

    return <div>
       <h1>Product Componet</h1>
       <h2>{msg}</h2>
       <button onClick={Handeler}>GM</button>
       <h2>{msg1}</h2>
       <button onDoubleClick={()=>{state2("Good Aternoon")}}>GA</button>
    </div>
}

export default Product