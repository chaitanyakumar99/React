import React, { useState } from 'react'
import Axios from 'axios'

const User = () => {
    let [users,setUser]=useState([])

    let get_User=()=>{

    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
    console.log(resp.data);
    setUser(resp.data)
    })
    .catch((err)=>{
        console.log(err);
    })

    }
  return (
    <div>
        <h2>User Data</h2>
        <pre>{JSON.stringify(users)}</pre>
        <button onClick={get_User}>Get Users</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                     users.length >0  ? <>
                    {
                        
                        users.map((User, index)=>{
                            return <tr>
                                <td>{User.id}</td>
                                <td>{User.name}</td>
                                <td>{User.email}</td>
                                <td>{User.address.city}</td>
                            </tr>
                        })
                    }
                    </> : <React.Fragment></React.Fragment>
                }
            </tbody>
        </table>
    </div>
  )
}

export default User