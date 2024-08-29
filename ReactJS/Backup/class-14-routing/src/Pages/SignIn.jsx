import React, { useState } from 'react'

const SignIn = () => {
  let [user, setUser] = useState({ emai: "", password: "" })
  let updateHandeler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  let SubmitHandeler = (event) => {
    event.preventDefault()
    console.log(user);
  }
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <h2>SignIn Component</h2>
      <form onSubmit={SubmitHandeler}>
        Email: <input type="text" onChange={updateHandeler} name='email' /><br /><br />
        Password: <input type="password" onChange={updateHandeler} name='password'/> <br /><br />
        <input type="submit" value='login'/>
      </form>
    </div>
  )
}

export default SignIn