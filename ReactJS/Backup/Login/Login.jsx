import { useState } from "react"

let Login=()=>{

    let[Users,Setusers]=useState([])
    let SubmitHandler=(event)=>{
       event.preventDefault();
       console.log(Users)
    }
    let updateHandler=()=>{


}    return <>
           <div className="container" onSubmit={SubmitHandler}>
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h1>Registartion form</h1>
                        </div>
                        <div className="card-body">
                            <input type="text" placeholder="username"  name="username"/> <br /> <br />
                            <input type="number"  placeholder="enter your number" name="number" /> <br /> <br />
                            <input type="checkbox" /> Accept T&C <br /> <br />
                            <input type="submit" name="submit" id="" />
                        </div>
                    </div>
                </div>
            </div>
           </div>
    
          </>
}
export default Login