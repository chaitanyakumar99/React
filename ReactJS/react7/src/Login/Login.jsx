// import React from 'react'
// import { useState } from 'react'

// const Login = () => {
//     let [user, setUser] = useState({ email:"",password:""})
                                                                      
//     let emailHandeler = () => {


//     }
//     let passwordHandeler = () => {

//     }
//     let submitHandeler = () => {

//     }
     
// return (
//     <div>
//         <form submitHandeler>
//             <label>Email:</label>
//             <input type="text" onChange={email:emailHandeler} />
//         </form>
//     </div>
// )
// }

// export default Login


import { useState } from 'react'
// import './log.css'

let Login=()=>{

    let[users,Setusers]=useState({email:"",password:""})
    let emailHandler=(event)=>{
        Setusers({...users,email: event.target.value})
    }
    let PasswordHandler=(event)=>{
                Setusers({...users,password:event.target.value})
    }
    let submitHandler=(event)=>{
      event.preventDefault();
      // Axios.post=().then().catch
      console.log(users)
    }
        
    return <>
       
        <pre>{JSON.stringify(users)}</pre>
        
         <form onSubmit={submitHandler}>
          
           <div className='form-group ,col-md-6'>
           <label  >Email</label>
           <input className='form-control' type="email" onChange={emailHandler} required />   <br />
           </div>
            <label  required className='form-group'>Password</label>
            <input type="text"  onChange={PasswordHandler} className='form-control' /> <br />
            <input type="submit"  value='login' className="bg-warning" />

         </form>
           </>
}
export default Login