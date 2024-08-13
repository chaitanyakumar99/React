import { useState ,useEffect } from "react"

let Product=()=>{
           let[msg, chaithanya]=useState("Hello");
           let [qty,Siva]=useState("Come to institute")

           
           let gmHandler=()=>{
            chaithanya("Goodmorning")
          };

          // useEffect(()=>{
          //   console.log("Working");
          //  },[msg])

          // let gnHandler=
           return <>
                    <h1>This is a Product component</h1>
                    <h2>Message:{msg}</h2>
                    <button onClick={gmHandler}>GM</button>
                    <button onClick={()=>{chaithanya("Good night")}
            }>GN</button>
               <h1>{qty}</h1>
          <button onDoubleClick={()=>{Siva("Upgrade the Skills")}}>Clickme</button>
                  </>
                  
}
export default Product