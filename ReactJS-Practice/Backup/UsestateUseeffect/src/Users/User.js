import Axios from "axios"
import { useEffect, useState } from "react"
let Users = () => {
    let [users, setUsers] = useEffect([])

    let getDataHandler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                setUsers(resp.data)
                console.log(resp)
                console.log(resp.data)
                console.log(resp.status)
            })
            .catch()
    }

    return <div>
        <h1>User Component</h1>
        <pre>{JSON.stringify(users)}</pre>
        {
            users.length > 0 ? <>
                <table>
                    <thead>
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return <tr>
                                         <td>{user.id}</td>
                                         <td>{user.name}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                </thead>
                </table>
            </>  


        }
        <button onClick={getDataHandler}>Click</button>
    </div>
}
export default Users   