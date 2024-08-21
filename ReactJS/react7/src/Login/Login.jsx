import { useState } from "react"

let Login = () => {
    let [users,setUsers]=useState({email:"",password:""})
    return <>

        <form>
            <label htmlFor="">Email:</label>
            <input type="email" />
            <br />
            <label htmlFor="">Password:</label>
            <input type="Password" />
            <br />
            <button>Submit</button>
        </form>
    </>
}

export default Login