import { useState ,useEffect } from "react"

let Product=()=>{
           let[msg, ck]=useState("Hello");
           let [qty,kk]=useState("Come to institute")

           
           let gmHandler=()=>{
            ck("Goodmorning")
          };

          // useEffect(()=>{
          //   console.log("Working");
          //  },[msg])

          // let gnHandler=g
           return <>
                    <h1>This is a Product component</h1>
                    <h2>Message:{msg}</h2>
                    <button onClick={gmHandler}>GM</button>
                    <button onClick={()=>{ck("Good night")}
            }>GN</button>
               <h1>{qty}</h1>
          <button onDoubleClick={()=>{kk("Upgrade the Skills")}}>Clickme</button>
                  </>
                  
}
export default Product