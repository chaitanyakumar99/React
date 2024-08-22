import Axios from "axios"
import { useEffect, useState } from "react"

let Users=()=>{
      
    let[users,Setusers]=useState([])

    //   let get_users=()=>{        not required
            
         
    //   }
    useEffect(()=>{                                                // executed automatically after  let[users,Setusers]=useState([]) then return , and noeed to use of button
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp)
            console.log(resp.data)
            Setusers(resp.data)})
        .catch((err)=>{console.log(err.message)})
    },[])

return<>
        <div>
            <h3>Users Component</h3>
            {/* <button onClick={get_users}>Get_users</button> */}
            <pre>{JSON.stringify(users)}</pre>
        
        </div>
        <table border={2}>
            <thead>
                <td>id</td>
                <td>name</td>
                <td>email</td>
                
            </thead>
            <tbody border={2}>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </>
}
export default Users
